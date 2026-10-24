
import "./Productos.css";
import ProductosCard from "./productosCard";
 
const productos = [
  {
    id: 1,
    nombre: "Cucharita sorpresa mini",
    descripcion: "Una pequeña sorpresa llena de ternura 🎀",
    precio: "$5.000",
    imagen: "/cucharita1.jpg",
  },
  {
    id: 2,
    nombre: "Cucharita sorpresa clásica",
    descripcion: "Detalles bonitos para alegrar tu día 💗",
    precio: "$8.000",
    imagen: "/cucharita2.jpg",
  },
  {
    id: 3,
    nombre: "Cucharita sorpresa especial",
    descripcion: "Una sorpresa especial para regalar ✨",
    precio: "$12.000",
    imagen: "/cucharita3.jpg",
  },
];


function Productos() {
  return (
    <section className="cucharitas" id="productos">
      <h2>Nuestras cucharitas sorpresa</h2>

      <p className="subtitulo">
        ¡Pequeños detalles que emocionan! 💕
      </p>

      <div className="productos">
        {productos.map((producto) => (
          <ProductosCard
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Productos;
