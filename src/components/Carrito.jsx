import "./Carrito.css";

const enviarWhatsApp = () => {
  const telefono = "573000000000"; // Reemplazar por el número real

  const seleccionados = productos.filter(
    (producto) => (cantidades[producto.id] || 0) > 0
  );

  if (seleccionados.length === 0) {
    alert("Agrega al menos un producto al carrito.");
    return;
  }

  if (telefono === "573000000000") {
    alert("Configura el WhatsApp real de Mimi_Scoop.");
    return;
  }

  const lineas = seleccionados.map((producto) => {
    const cantidad = cantidades[producto.id];
    const subtotal = producto.precio * cantidad;

    return `• ${producto.nombre} x${cantidad} = $${subtotal.toLocaleString("es-CO")}`;
  });

  const total = seleccionados.reduce(
    (suma, producto) =>
      suma + producto.precio * cantidades[producto.id],
    0
  );

  const mensaje = [
    "¡Hola, Mimi_Scoop! 💗 Quiero hacer este pedido:",
    "",
    ...lineas,
    "",
    `Total: $${total.toLocaleString("es-CO")} COP`,
    "",
    "¿Me confirman disponibilidad y entrega?"
  ].join("\n");

  const url =
    `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
<button
  type="button"
  className="boton-whatsapp"
  onClick={enviarWhatsApp}
>
  Enviar pedido por WhatsApp
</button>

export default Carrito;