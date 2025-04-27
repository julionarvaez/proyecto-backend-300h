const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Inicializar express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    

// conectar a mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Backend_300h", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexion exitosa a mongo");
}).catch((error) => {
    console.log("error al conectarnos a mongo:" + error);
});


const Schema = mongoose.Schema

const usuarioSchema = new Schema({
  nombre: String,
  email: {
    type: String,
    unique: true, // asegura que el campo sea único
    required: true // requerido
  },
  edad: Number,
  fecharegistro: {
    type: Date,
    default: Date.now
    // establece una fecha por defecto
  }
})

const Usuario = mongoose.model("Usuario", usuarioSchema)

//ahora veremos las funcionalidades del CRUD

//GUARDAR

const instancia = new Usuario;

instancia.nombre = "Julio Narvaez";
instancia.email = "juliocesar909@gmail.com";
instancia.contraseña = "87654321";
instancia.rol = "Administrador";

instancia.save().then((respuesta) => {
    console.log(respuesta);
}).catch((err) => {
    console.log(err);
}); 


// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'API de E-commerce funcionando correctamente' });
  });
  
  // Rutas
  app.use('/api/usuarios', require('./routes/usuarioRoutes'));
  app.use('/api/productos', require('./routes/productoRoutes'));
  
  // Middleware para manejar rutas no encontradas
  app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
  });
  
  // Puerto y arranque del servidor
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

