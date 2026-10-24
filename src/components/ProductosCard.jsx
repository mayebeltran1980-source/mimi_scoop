import { useState } from "react";

function ProductosCard(props) {
  const [cantidad, setCantidad] = useState(0);
  const [mensaje, setMensaje] = useState("");
  function agregarAlPedido() {
    setMensaje(
      `Agregaste ${cantidad} unidad(es) de ${props.nombre} 💗`
    );
  
  }
  return (
    <article className="tarjeta">
      <img
        className="imagen-producto"
        src={props.imagen}
        alt={props.nombre}
      />
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <p className="precio">{props.precio}</p>
      <div className="controles-cantidad">
        <button
          onClick={() => {
            setCantidad((actual) => Math.max(0, actual - 1));
            setMensaje("");
          }}
          aria-label="Disminuir cantidad"
        >  
         −
        </button>

        <span>{cantidad}</span>

        <button
          onClick={() => {
            setCantidad((actual) => actual + 1);
            setMensaje("");
          }}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
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
