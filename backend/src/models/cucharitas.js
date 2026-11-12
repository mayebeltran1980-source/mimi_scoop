const mongoose = require('mongoose');

const CucharitaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true }, // ej: Dulce, Picante, Frutal, Colección
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 10 }
});



module.exports = mongoose.model('Cucharita', CucharitaSchema);