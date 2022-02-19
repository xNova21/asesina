import { Container, Row } from "react-bootstrap";
import Conocimientos from "./Conocimientos";
import Descripcion from "./Descripcion";
import PuntosDrama from "./PuntosDrama";
import Cosas from "./TusCosas";
import TusPalabras from "./TusPalabras";
import Chequeo from "./Chequeos";
import Heridas from "./Heridas";
const Indice = () => {
  return (
    <Container className="mt-3">
      <Row className="mb-1 fs-2">
        <a href="#descripcion">Descripción</a>
      </Row>
      <Row className="mb-1 fs-2">
        <a href="#conocimientos">Conocimientos</a>
      </Row>
      <Row className="mb-1 fs-2"><a href="#drama">Puntos de Drama</a></Row>
      <Row className="mb-1 fs-2"><a href="#cosas">Tus Cosas</a></Row>
      <Row className="mb-1 fs-2"><a href="#palabras">Tus palabras</a></Row>
      <Row className="mb-1 fs-2"><a href="#chequeo">CHEQUEOS</a></Row>
      <Row className="mb-1 fs-2"><a href="#heridas">Heridas</a></Row>
      <Descripcion id="descripcion" />
      <Conocimientos id="conocimientos" />
      <PuntosDrama id="drama"/>
      <Cosas id="cosas"/>
      <TusPalabras id="palabras"/>
      <Chequeo id="chequeo"/>
      <Heridas id="heridas"/>
      <Row className="fs-2">Esto es básicamente todo lo que necesitas saber. Ahora ya estás listo
para empezar la historia.</Row>
    </Container>
  );
};
export default Indice;
