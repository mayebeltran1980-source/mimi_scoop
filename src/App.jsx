
import "./App.css";
import Encabezado from "./components/Encabezado.jsx";
import Bienvenida from "./components/Bienvenida.jsx";
import Productos from "./components/productos.jsx"
import ComoComprar from "./components/ComoComprar.jsx";
import Contacto from "./components/Contacto.jsx";
import PedidoPersonalizado from "./components/PedidoPersonalizado.jsx";


function App() {
  return (
    <>
      <Encabezado />
      <Bienvenida />
      <Productos />
      <ComoComprar />
      <PedidoPersonalizado />
      <Contacto />

    </>
  );
}

export default App;
