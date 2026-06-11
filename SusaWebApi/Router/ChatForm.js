const express = require('express');
const router = express.Router();
const userFormController = require('../controller/ChatForm');

// Create
router.post('/add', userFormController.createUserForm);

// Read all
router.get('/GetAll', userFormController.getAllUserForms);

// Read one
router.get('/:id', userFormController.getUserFormById);

// Update
router.put('/:id', userFormController.updateUserForm);

// Delete
router.delete('/:id', userFormController.deleteUserForm);

module.exports = router;
