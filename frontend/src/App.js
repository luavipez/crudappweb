import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if (!token) {
    return (
      <div>
        <Login setToken={setToken} />
        <Register />
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          setToken(null);
        }}
      >
        Cerrar Sesión
      </button>
      <ItemForm onCreated={() => window.location.reload()} />
      <ItemList />
    </div>
  );
}

export default App;
