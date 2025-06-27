import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const ok = register(form.name, form.email, form.password);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Ошибка регистрации');
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: '48px auto', padding: 24, background: "#fff", borderRadius: 10 }}>
      <h2> Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          style={{ width: '100%', margin: '12px 0', padding: 8 }}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: '100%', margin: '12px 0', padding: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          style={{ width: '100%', margin: '12px 0', padding: 8 }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button style={{ width: '100%', padding: '10px', background: '#4653bb', color: '#fff', border: 0, borderRadius: 6}}>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegisterPage;