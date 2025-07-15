const db = require('../models/db');

exports.getItems = async (req, res) => {
  const [items] = await db.query('SELECT * FROM items WHERE user_id = ?', [req.user.id]);
  res.json(items);
};

exports.createItem = async (req, res) => {
  const { title, description } = req.body;
  await db.query('INSERT INTO items (title, description, user_id) VALUES (?, ?, ?)', [
    title,
    description,
    req.user.id,
  ]);
  res.json({ message: 'Item creado' });
};

exports.updateItem = async (req, res) => {
  const { title, description } = req.body;  
  await db.query('UPDATE items SET title = ?, description = ? WHERE id = ? AND user_id = ?', [
    title,
    description,
    req.params.id,
    req.user.id,
  ]);
  res.json({ message: 'Item actualizado' });
};

exports.deleteItem = async (req, res) => {
  await db.query('DELETE FROM items WHERE id = ? AND user_id = ?', [req.params.id, req.user.id]);
  res.json({ message: 'Item eliminado' });
};
