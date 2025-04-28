# proyecto-backend-300h- Diplomado Desarrollo Web


Este repositorio contiene el backend para el proyecto del diplomado de desarrollo web, implementado con Node.js, Express y MongoDB.

## Requisitos Previos

- Node.js (v14 o superior)
- MongoDB (v4.4 o superior)
- npm (v6 o superior)

## Instalación
- Instalar dependencias: con el comando (npm install)

## Crear archivo .env en la raíz del proyecto con las siguientes variables 
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/Backend_300h
JWT_SECRET=

## Ejecución el servidor 
- node app.js


## Modo producción
- bashnpm start

## Estructura del Proyecto
nombre-proyecto-backend-300h/
|-- app.js                  # Punto de entrada de la aplicación
|--config/                 # Configuraciones 
|-- controllers/            # Controladores
|-- middlewares/            # Middlewares personalizados
|-- models/                 # Modelos de Mongoose
|-- routes/                 # Rutas de la API
|-- .env                    # Variables de entorno


## API 
Usuarios

- GET /api/users - Obtener todos los usuarios
- GET /api/users/ - Obtener un usuario por ID
- POST /api/users - Crear un nuevo usuario
- PUT /api/users/ - Actualizar un usuario
- DELETE /api/users/ - Eliminar un usuario (baja lógica)


##Clonar el repositorio:
```bash
git clone https://github.com/julionarvaez/proyecto-backend-300h.git
