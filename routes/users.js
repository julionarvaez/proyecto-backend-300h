const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Obtener un usuario por su ID
router.get('/:id', UserController.getUserById);

// Crear un nuevo usuario
router.post('/', UserController.createUser);

// Actualizar un usuario
router.put('/:id', UserController.updateUser);

// Eliminar un usuario
router.delete('/:id', UserController.deleteUser);

module.exports = router;