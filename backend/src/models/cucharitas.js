const mongoose = require('mongoose');

const CucharitaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 15 }
});



module.exports = mongoose.model('Cucharita', CucharitaSchema);