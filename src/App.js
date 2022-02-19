// import "./App.css";
import "./micss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Home from "./components/Datos/Home";
import Login from "./components/Usuario/Login";
import Juego from "./components/Juego/Juego";
import Libros from "./components/Datos/Libros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/libros" element={<Libros />}>

      </Route>

      <Route path="/iniciosesion" element={<Login />} />
      <Route path="/juego/:libro" element={<Juego />} />
    </Routes>
  );
}

export default App;
