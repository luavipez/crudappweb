const express = require('express');
const { register, login } = require('../controllers/userController');
const { body } = require('express-validator');

const router = express.Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Nombre requerido'),
    body('email').isEmail().withMessage('Correo inválido'),
    body('password').isLength({ min: 6 }).withMessage('Mínimo 6 caracteres'),
  ],
  register
);

router.post('/login', login);

module.exports = router;
