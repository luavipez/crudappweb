import React, { useEffect, useState } from 'react';
import API from '../api/api';
import '../styles/ItemList.css';

export default function ItemList() {
  const [idE, setIDE] = useState('');
   const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const res = await API.get('/items');
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await API.delete(`/items/${id}`);
    loadItems();
  };

     const updateItem = async () => {
    await API.put(`/items/${idE}`, { title, description });  
   
     
   
  };

  const editar = (id) => {
    document.getElementById('formluc').hidden = false;
    document.getElementById('title').value = items.find(item => item.id === id).title;
    document.getElementById('description').value = items.find(item => item.id === id).description;
    setTitle(items.find(item => item.id === id).title);
    setDescription(items.find(item => item.id === id).description);
    setIDE(id);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h2>Mis Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} --- {item.description}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
            <button onClick={() => editar(item.id)}>Editar</button>
          </li>
        ))}
      </ul>
        <form id='formluc' onSubmit={updateItem} hidden={true}>
        <h3>Actualizar Item</h3>
          <input id='title'
          onChange={(e) => setTitle(e.target.value)}
         placeholder="Título"        
        />
        <input id='description'
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
        />
       <button type='submit'>Actualizar</button>
    </form>
    </div>
  );
}
