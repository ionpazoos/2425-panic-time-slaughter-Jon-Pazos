const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/database/config");
const characterRoutes = require("./src/routes/characterRoutes")
const timeRoutes = require("./src/routes/timeRoutes")

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use('/', characterRoutes)
app.use('/', timeRoutes )

//DB conexion
connectDB();

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
