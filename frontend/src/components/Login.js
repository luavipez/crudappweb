import React, { useState } from 'react';
import API from '../api/api';
import '../styles/Login.css';

export default function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
