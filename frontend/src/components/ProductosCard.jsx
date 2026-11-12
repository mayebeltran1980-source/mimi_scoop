import { useState } from "react";

function ProductosCard({
  id,
  nombre,
  descripcion,
  precio,
  imagen,
  cantidad,
  actualizarCantidad,
}) {
  const [mensaje, setMensaje] = useState("");

  function agregarAlPedido() {
    const nuevaCant = cantidad === 0 ? 1 : cantidad;
    actualizarCantidad(id, nuevaCant);
    setMensaje(`¡Listo! Tienes ${nuevaCant} unidad(es) de ${nombre} en tu carrito 💗`);
  }

  return (
    <article className="tarjeta">
      <img
        className="imagen-producto"
        src={imagen}
        alt={nombre}
      />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio">${precio.toLocaleString("es-CO")}</p>

      <div className="controles-cantidad">
        <button
          type="button"
          onClick={() => {
            actualizarCantidad(id, cantidad - 1);
            setMensaje("");
          }}
          aria-label="Disminuir cantidad"
        >
          −
        </button>

        <span>{cantidad}</span>

        <button
          type="button"
          onClick={() => {
            actualizarCantidad(id, cantidad + 1);
            setMensaje("");
          }}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="boton-pedido"
        onClick={agregarAlPedido}
      >
        Agregar al pedido 💌
      </button>

      {mensaje && <p className="mensaje-pedido">{mensaje}</p>}
    </article>
  );
}

export default ProductosCard;