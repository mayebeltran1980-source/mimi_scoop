import "../App.css";

function Carrito({ productos, cantidades, vaciarCarrito }) {
  const telefono = "3160560666";

  const seleccionados = productos.filter(
    (producto) => (cantidades[producto.id] || 0) > 0
  );

  const total = seleccionados.reduce(
    (suma, producto) => suma + producto.precio * cantidades[producto.id],
    0
  );

  const enviarWhatsApp = () => {
    if (seleccionados.length === 0) {
      alert("Agrega al menos un producto al carrito.");
      return;
    }


    const lineas = seleccionados.map((producto) => {
      const cantidad = cantidades[producto.id];
      const subtotal = producto.precio * cantidad;

      return `• ${producto.nombre} x${cantidad} = $${subtotal.toLocaleString("es-CO")}`;
    });

    const mensaje = [
      "¡Hola, Mimi_Scoop! 💗 Quiero hacer este pedido:",
      "",
      ...lineas,
      "",
      `Total: $${total.toLocaleString("es-CO")} COP`,
      "",
      "¿Me confirman disponibilidad y entrega?",
    ].join("\n");

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="carrito-seccion" id="carrito">
      <h2>Tu carrito de sorpresas 🛍️</h2>

      {seleccionados.length === 0 ? (
        <p className="carrito-vacio">
          Aún no has agregado cucharitas. ¡Elige tus favoritas arriba! ✨
        </p>
      ) : (
        <div className="carrito-detalle">
          <ul className="carrito-lista">
            {seleccionados.map((producto) => {
              const cant = cantidades[producto.id];
              const subtotal = producto.precio * cant;
              return (
                <li key={producto.id} className="carrito-item">
                  <span>
                    <strong>{producto.nombre}</strong> (x{cant})
                  </span>
                  <span>${subtotal.toLocaleString("es-CO")}</span>
                </li>
              );
            })}
          </ul>

          <p className="carrito-total">
            Total a pagar: <strong>${total.toLocaleString("es-CO")} COP</strong>
          </p>

          <div className="carrito-acciones">
            <button
              type="button"
              className="boton-whatsapp"
              onClick={enviarWhatsApp}
            >
              Enviar pedido por WhatsApp 💬
            </button>

            <button
              type="button"
              className="boton-vaciar"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrito;