const express = require('express');
const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controller/user');

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.get('/getAll', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
