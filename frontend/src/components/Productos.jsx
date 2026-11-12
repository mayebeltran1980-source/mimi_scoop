
import "../App.css";
import ProductosCard from "./ProductosCard";

function Productos({ productos, cantidades, actualizarCantidad }) {
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
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}
            cantidad={cantidades[producto.id] || 0}
            actualizarCantidad={actualizarCantidad}
          />
        ))}
      </div>
    </section>
  );
}

export default Productos;