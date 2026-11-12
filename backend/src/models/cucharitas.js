const express = require("express");
const router = express.Router();

const cucharitas = [
  {
    _id: "1",
    nombre: "Cucharita pequeña",
    descripcion: "Una pequeña sorpresa llena de ternura 🎀 ---5 a 8 productos---",
    precio: 30000,
    stock: 15,
  },
  {
    _id: "2",
    nombre: "Cucharita mediana",
    descripcion: "Detalles bonitos para alegrar tu día 💗 ---9 a 12 productos---",
    precio: 50000,
    stock: 20,
  },
  {
    _id: "3",
    nombre: "Cucharita grande",
    descripcion: "Una sorpresa especial para regalar ✨ ---13 a 16 productos---",
    precio: 70000,
    stock: 10,
  },
];

// GET: Traer todos los productos
router.get("/", (req, res) => {
  res.json(cucharitas);
});

// POST: Agregar un producto nuevo en memoria
router.post("/", (req, res) => {
  const nuevo = { _id: String(Date.now()), ...req.body };
  cucharitas.push(nuevo);
  res.status(201).json(nuevo);
});

module.exports = router;