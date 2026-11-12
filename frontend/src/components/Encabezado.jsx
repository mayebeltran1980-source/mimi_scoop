import "../App.css";

function Encabezado() {
  return (
    <header className="encabezado">
      <a className="encabezado-logo" href="#inicio">
        Mimi<span>_Scoop</span>
        <span className="encabezado-corazon">♡</span>
      </a>

      <nav
        className="encabezado-menu"
        aria-label="Menú principal"
      >
        <a href="#inicio">Inicio</a>
        <a href="#productos">Cucharitas</a>
        <a href="#contacto">Contacto</a>
        <a href="#pedido-personalizado">Pedido personalizado</a>
      </nav>

      <a className="encabezado-boton" href="#productos">
        Descubrir <span>✿</span>
      </a>
    </header>
  );
}

export default Encabezado;
