import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import CrearDescripcion from "./CrearDescripcion";
import CrearConocimientos from "./CrearConocimientos";
import MyNavbar from "../MyNavbar";
import Intro from "./Intro";
const CrearPersonaje = () => {
  let [intro, setIntro] = useState({leido: false})
  let leidoHandle=()=>{
    setIntro({leido: true})
  }
  let [personaje, setPersonaje] = useState({
    nombre: "Vlada",
    nacionalidad: "Bosnia",
    sexo: "Mujer",
    arma: "Pistola con silenciador",
    ojos: "Azules",
    pelo: "Rubio",
    puntosConocimiento: false,
    conocimientos: {
      "Artes Marciales": 0,
      Atletismo: 0,
      "Armas fuego": 0,
      Diplomacia: 0,
      Callejeo: 0,
      Ciencias: 0,
    },
    drama: 0,
    palabras: [],
    heridas: 0,
  });
  const cambiosHandler = (atributo, datos) => {
    setPersonaje({ ...personaje, [atributo]: datos });
  };
  return (
    <Container>
      <MyNavbar />
      {!intro.leido ? <Intro onLeido={leidoHandle}/> : !personaje.descripcion ? (
        <CrearDescripcion onCambiosHandle={cambiosHandler} />
      ) : !personaje.puntosConocimiento ? (
        <CrearConocimientos conocimientos={personaje.conocimientos} />
      ) : (
        <></>
      )}
    </Container>
  );
};
export default CrearPersonaje;
