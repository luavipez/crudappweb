const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

const router = express.Router();

router.get('/', protect, getItems);
router.post('/', protect, createItem);
router.put('/:id', protect, updateItem);
router.delete('/:id', protect, deleteItem);

module.exports = router;
