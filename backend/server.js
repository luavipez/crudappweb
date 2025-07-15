const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo http://localhost:${PORT}`));
