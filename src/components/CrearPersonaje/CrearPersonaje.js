import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import CrearDescripcion from "./CrearDescripcion";
import CrearConocimientos from "./CrearConocimientos";
import CrearCosas from "./CrearCosas";
import MyNavbar from "../MyNavbar";
import Intro from "./Intro";
import Cookies from "universal-cookie";
const CrearPersonaje = () => {
  let [intro, setIntro] = useState({ leido: false });
  let leidoHandle = () => {
    setIntro({ leido: true });
  };
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
    drama: 3,
    palabras: [],
    heridas: 0,
  });
  const cambiosHandler = (atributo, datos) => {
    setPersonaje({ ...personaje, [atributo]: datos });
    console.log(personaje);
  };
  const guardarDatos = () => {
    const cookies = new Cookies();
    cookies.set("personaje", personaje);
    console.log(cookies.get("personaje"));
  };
  return (
    <Container>
      <MyNavbar />
      {!intro.leido ? (
        <Intro onLeido={leidoHandle} />
      ) : !personaje.descripcion ? (
        <CrearDescripcion onCambiosHandle={cambiosHandler} />
      ) : !personaje.puntosConocimiento ? (
        <CrearConocimientos
          conocimientos={personaje.conocimientos}
          onCambiosHandle={cambiosHandler}
        />
      ) : !personaje.cosas ? (
        <CrearCosas onCambiosHandle={cambiosHandler} />
      ) : (
        <div>{guardarDatos()}</div>
      )}
    </Container>
  );
};
export default CrearPersonaje;
