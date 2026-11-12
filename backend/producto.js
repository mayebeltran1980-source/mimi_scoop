const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  _id:{ type: Number, default: 1 },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 15 }
});

module.exports = mongoose.model('Producto', productoSchema);