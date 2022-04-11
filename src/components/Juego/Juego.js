import MiNavbar from "./Navbar";
import Cookies from "universal-cookie";
import TextoJuego from "./TextoJuego";
import FuncionChequeo from "./FuncionChequeo";

import HistoriaTemp from "./HistoriaTemp";

import { Container } from "react-bootstrap";
import { useState } from "react";
const Juego = () => {
  const cookies = new Cookies();

  const [pantalla, setPantalla] = useState({ ficha: "textoJuego" });
  let indiceGuardo = cookies.get("fichaActual");
  const [fichaActual, setFichaActual] = useState(
    HistoriaTemp[indiceGuardo] || HistoriaTemp[2]
  );

  const handlePantalla = (datoPantalla) => {
    console.log("funcion handlePantalla");
    setPantalla({ ficha: datoPantalla });
  };
  const handleFichaActual = (fichaDestino) => {
    // console.log("funcion handleFichaActual");
    let indiceActual = HistoriaTemp.filter((elemento) => {
      return elemento.numero === fichaDestino;
    });
    setFichaActual(indiceActual[0]);
  };

  let personaje = cookies.get("personaje");
  if (!personaje) {
    console.log("No hay datos");
  }

  return (
    <Container>
      {console.log(HistoriaTemp[2])}
      <MiNavbar personaje={personaje} /> {console.log(pantalla)}
      {pantalla.ficha === "chequeo" && (
        <FuncionChequeo
          personaje={personaje}
          onChangePantalla={handlePantalla}
          onChangeFicha={handleFichaActual}
          modificadores={fichaActual.modificadores}
          exito={fichaActual.exito}
          fracaso={fichaActual.fracaso}
        />
      )}
      {pantalla.ficha === "textoJuego" && (
        <TextoJuego
          ficha={fichaActual}
          onChangePantalla={handlePantalla}
          onChangeFicha={handleFichaActual}
        />
      )}
    </Container>
  );
};
export default Juego;
