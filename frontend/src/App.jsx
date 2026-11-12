import { useState } from "react";
import "./App.css";
import Encabezado from "./components/Encabezado";
import Bienvenida from "./components/Bienvenida";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import PedidoPersonalizado from "./components/PedidoPersonalizado";
import ComoComprar from "./components/ComoComprar";
import Contacto from "./components/Contacto";

const listaProductos = [
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
  // Guarda las cantidades por ID de producto, ej: { 1: 2, 3: 1 }
  const [cantidades, setCantidades] = useState({});

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
          productos={listaProductos}
          cantidades={cantidades}
          actualizarCantidad={actualizarCantidad}
        />
        <Carrito
          productos={listaProductos}
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