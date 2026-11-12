import { useState, useEffect } from "react";
import "./App.css";
import { obtenerCucharitas } from "./api";
import Encabezado from "./components/Encabezado";
import Bienvenida from "./components/Bienvenida";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import PedidoPersonalizado from "./components/PedidoPersonalizado";
import ComoComprar from "./components/ComoComprar";
import Contacto from "./components/Contacto";

const productosRespaldo = [

{
  id: 1,
  nombre: "Cucharita pequeña",
  descripcion: "Una pequeña sorpresa llena de ternura 🎀 ---5 a 8 productos---",
  precio: 30000,
  imagen: "/cucharita1.jpg",
},
{
  id: 2,
  nombre: "Cucharita mediana",
  descripcion: "Detalles bonitos para alegrar tu día 💗 ---9 a 12 productos---",
  precio: 50000,
  imagen: "/cucharita2.jpg",
},
{
  id: 3,
  nombre: "Cucharita grande",
  descripcion: "Una sorpresa especial para regalar ✨ ---13 a 16 productos---",
  precio: 70000,
  imagen: "/cucharita3.jpg",
},
];

function App() {
  const [productos, setProductos] = useState(productosRespaldo);
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    obtenerCucharitas()
      .then((datosApi) => {
        if (Array.isArray(datosApi) && datosApi.length > 0) {
          const imagenesLocales = ["/cucharita1.jpg", "/cucharita2.jpg", "/cucharita3.jpg"];
          const formateados = datosApi.map((item, index) => ({
            id: item._id || index + 1,
            nombre: item.nombre,
            descripcion: item.descripcion,
            precio: item.precio,
            imagen: item.imagen || imagenesLocales[index % imagenesLocales.length],
          }));
          setProductos(formateados);
        }
      })
      .catch((error) => {
        console.warn("Usando productos locales porque la API no respondió:", error.message);
      });
  }, []);

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(0, nuevaCantidad),
    }));
  };

  const vaciarCarrito = () => {
    setCantidades({});
  };

  return (
    <>
      <Encabezado />
      <main>
        <Bienvenida />
        <Productos
          productos={productos}
          cantidades={cantidades}
          actualizarCantidad={actualizarCantidad}
        />
        <Carrito
          productos={productos}
          cantidades={cantidades}
          vaciarCarrito={vaciarCarrito}
        />
        <PedidoPersonalizado />
        <ComoComprar />
      </main>
      <Contacto />
    </>
  );
}

export default App;