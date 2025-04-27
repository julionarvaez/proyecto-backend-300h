const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Cargar configuración del archivo .env (solo una vez)
require('dotenv').config();

// Definir el puerto primero
const PORT = process.env.PORT || 5000;

// Inicializar express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    

// Conectar a mongoose usando la variable de entorno
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexión exitosa a MongoDB");
}).catch((error) => {
    console.log("Error al conectarnos a MongoDB:" + error);
});

// Definir el esquema de usuario
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  contraseña: String, // Agregado al esquema
  rol: String, // Agregado al esquema
  edad: Number,
  fecharegistro: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

// Ruta inicial para verificar funcionamiento
app.get('/', (req, res) => {
  res.json({
    message: 'API funcionando correctamente',
    status: 'success'
  });
});

// Importar rutas (corregido)
// Nota: Debes tener el archivo usuarioRoutes.js en la carpeta routes
try {
  const userRoutes = require('./routes/usuarioRoutes');
  app.use('/api/users', userRoutes);
} catch (error) {
  console.error("Error al cargar rutas de usuario:", error.message);
  // Continúa sin las rutas si no existen
}

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// NOTA: Codigo de creación de usuario eliminado del archivo principal
// Se recomienda moverlo a un controlador o a un script de inicialización separado