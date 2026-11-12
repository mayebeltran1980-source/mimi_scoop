require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cucharitasRoutes = require("./src/models/cucharitas");

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a MongoDB usando tu .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado correctamente 💗"))
  .catch((err) => console.error("Error conectando a MongoDB:", err.message));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor de Mimi_Scoop funcionando 💗" });
});

// Ruta de tu API
app.use("/api/cucharitas", cucharitasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});