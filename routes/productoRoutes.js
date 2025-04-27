const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Rutas para productos
router.get('/', productoController.getProductos);
router.post('/', productoController.crearProducto);

module.exports = router;