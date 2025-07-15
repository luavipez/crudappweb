import React, { useState } from 'react';
import API from '../api/api';
import '../styles/ItemForm.css';

export default function ItemForm({ onCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/items', { title, description });
    setTitle('');
    setDescription('');
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Item</h2>
      <input value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título" 
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
