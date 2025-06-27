import { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceCreateForm from '../components/ServiceCreateForm';

const api = axios.create({ baseURL: 'http://localhost:5000/api/auth', withCredentials: true });

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setUser(res.data.user))
        .catch(() => {
          setUser(null);
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleChange = e => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const login = async () => {
    setMsg('');
    try {
      const res = await api.post('/login', { email: form.email, password: form.password });
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      setMsg('');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Ошибка при входе');
    }
  };

  const register = async () => {
    setMsg('');
    try {
      await api.post('/register', { name: form.name, email: form.email, password: form.password });
      setMode('login');
      setMsg('Регистрация успешна! Теперь войдите.');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Ошибка при регистрации');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setMsg('Вы вышли из аккаунта');
  };


  if (user) {
    return (
      <div>
        <div className="max-w-md mx-auto mt-14 bg-white/95 shadow-xl rounded-2xl px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Привет, {user.name}!</h2>
          <div className="text-zinc-600 text-lg mb-8">
            Вы вошли как <span className="font-semibold">{user.email}</span>
          </div>
          <button
            className="px-5 py-2 bg-red-500 hover:bg-red-600 transition text-white font-bold rounded-xl"
            onClick={logout}
          >
            Выйти
          </button>
          {msg && <div className="my-3 p-2 rounded-lg bg-green-100 text-green-700 text-sm border border-green-300">{msg}</div>}
        </div>

        {user.role === 'admin' && (
        <div className="mt-8">
          <ServiceCreateForm />
        </div>
      )}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-14 bg-white shadow-2xl rounded-2xl px-8 py-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">
        {mode === 'login' ? 'Вход в личный кабинет' : 'Регистрация'}
      </h2>
      {msg && <div className="my-3 p-2 rounded-lg bg-red-100 text-red-700 text-sm border border-red-300">{msg}</div>}
      <form
        onSubmit={e => {
          e.preventDefault();
          mode === 'login' ? login() : register();
        }}
        className="flex flex-col gap-4 mb-2"
      >
        {mode === 'register' && (
          <input
            name="name"
            className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          name="email"
          type="email"
          className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          className="mt-2 bg-indigo-600 hover:bg-indigo-700 transition text-white font-bold py-3 rounded-xl"
          type="submit"
        >
          {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
      <div className="text-sm text-zinc-500 mt-4 text-center">
        {mode === 'login' ? (
          <>
            Нет аккаунта?{' '}
            <button
              className="text-indigo-600 hover:underline font-medium"
              onClick={() => setMode('register')}
              type="button"
            >
              Зарегистрируйтесь
            </button>
          </>
        ) : (
          <>
            Уже есть аккаунт?{' '}
            <button
              className="text-indigo-600 hover:underline font-medium"
              onClick={() => setMode('login')}
              type="button"
            >
              Войти
            </button>
          </>
        )}
      </div>
    </div>
  );
}