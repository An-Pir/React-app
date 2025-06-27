import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const ok = login(form.email, form.password);
    if (ok) {
      navigate('/dashboard');
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div style={{ maxWidth: 360, margin: '48px auto', padding: 24, background: "#fff", borderRadius: 10 }}>
      <h2>🔑 Вход</h2>
      <form onSubmit={handleSubmit}>
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
        <button style={{ width: '100%', padding: '10px', background: '#4653bb', color: '#fff', border: 0, borderRadius: 6}}>Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;