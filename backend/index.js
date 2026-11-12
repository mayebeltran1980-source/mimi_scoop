const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor listo" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/api/cucharitas', async (req, res) => {
  try {
    let lista = await Producto.find();

    if (lista.length === 0) {
      lista = await Producto.insertMany([
        {
          nombre: "Cucharita Dulce Fresa",
          categoria: "Dulce",
          descripcion: "Sabor a fresa con chispas sorpresa.",
          precio: 4500,
          colorTema: "rosa"
        },
        {
          nombre: "Cucharita Galaxia Uva",
          categoria: "Colección",
          descripcion: "Estrellitas dulces sabor uva.",
          precio: 5000,
          colorTema: "morado"
        },
        {
          nombre: "Cucharita Nube Azul",
          categoria: "Frutal",
          descripcion: "Toque refrescante de mora azul.",
          precio: 4500,
          colorTema: "azul"
        },
        {
          nombre: "Cucharita Sol Mango",
          categoria: "Picante",
          descripcion: "Mango biche con centro acidito.",
          precio: 4800,
          colorTema: "amarillo"
        }
      ]);
    }

    res.json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al cargar los productos" });
  }
});