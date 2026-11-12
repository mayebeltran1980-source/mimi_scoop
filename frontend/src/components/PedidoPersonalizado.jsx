import "../App.css";

function PedidoPersonalizado() {
  const telefono = "3160560666"; 

  function consultarPedido() {
    
    const mensaje =
      "¡Hola, Mimi_Scoop! 💗 Quiero hacer un pedido personalizado. " +
      "Me gustaría conocer las opciones disponibles. ¿Me pueden ayudar?";

    const url =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="pedido-personalizado"
      id="pedido-personalizado"
    >
      <div className="pedido-personalizado-contenido">
        <span className="mini-etiqueta">Un detalle hecho para ti 🎀</span>

        <h2>¡Crea tu cucharita sorpresa personalizada!</h2>

        <p>
          ¿Tienes una idea especial para regalar?
          Escríbenos por WhatsApp y cuéntanos qué tienes en mente.
        </p>

        <button
          className="boton-personalizado"
          onClick={consultarPedido}
          type="button"
        >
          Personalizar mi pedido por WhatsApp
        </button>
      </div>
    </section>
  );
}

export default PedidoPersonalizado;
