import React, { useState } from 'react';
import API from '../api/api';
import '../styles/Register.css';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/users/register', form);
    alert('Usuario registrado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Nombre"
      />
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Correo"
      />
      <input
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Contraseña"
      />
      <button type="submit">Registrar</button>
    </form>
  );
}
