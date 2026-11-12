import "../App.css";


function Bienvenida() {
  return (
    <section className="bienvenida" id="inicio">
       <p className="etiqueta">Pequeñas sorpresas, grandes sonrisas 💗</p>
      <h1>¡Bienvenidos a Mimi_Scoop!</h1>

      <p>
        Momentos de intriga, regalos con amor
        y sorpresas hechas para sonreír.
      </p>

      <img
        className="foto-logo"
        src="/logo.jpg"
        alt="logo de Mimi_Scoop"
      />

      <button>Descubrir sorpresitas</button>
    </section>
  );
}

export default Bienvenida;

