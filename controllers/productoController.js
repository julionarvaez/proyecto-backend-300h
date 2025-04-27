const Producto = require('../models/producto');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener productos' });
  }
};

// Crear un producto
exports.crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, inventario, categoria } = req.body;
    
    const producto = new Producto({
      nombre,
      descripcion,
      precio,
      inventario,
      categoria
    });
    
    await producto.save();
    
    res.status(201).json({ mensaje: 'Producto creado correctamente', producto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear producto' });
  }
};
