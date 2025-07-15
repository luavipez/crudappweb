const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (user.length) return res.status(400).json({ message: 'El correo ya está registrado' });

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
    name,
    email,
    hashedPassword,
  ]);

  res.json({ message: 'Usuario registrado correctamente' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (!user.length) return res.status(400).json({ message: 'Credenciales inválidas' });

  const validPassword = await bcrypt.compare(password, user[0].password);
  if (!validPassword) return res.status(400).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign({ id: user[0].id, name: user[0].name }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
};
