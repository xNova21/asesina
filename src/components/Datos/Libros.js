import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

import Lateral from "../Lateral";
import MyNavbar from "../MyNavbar";
import Lineas from "./Libros/Lineas";
import Tierra from "./Libros/Tierra";
import Sustituto from "./Libros/Sustituto";
import Fuga from "./Libros/Fuga";
import Venganza from "./Libros/Venganza";

const Libros = () => {
  let [libro, setLibro] = useState({ nombre: "ninguno" });
  const handleLibro = (event) => {
    setLibro({ nombre: event.target.id });
    console.log(event.target.id);
  };
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Lateral />
        <Col>
          <Container>
            <Card className="mt-5">
              <Card.Title className="fs-2 fw-bolder">Saga Asesina</Card.Title>
              <Card.Body>
                <Row className=" fs-3 mb-3" onClick={handleLibro} id="lineas">
                  Lineas
                </Row>
                <Row className="fs-3 mb-3" onClick={handleLibro} id="tierra">
                  La tierra prometida
                </Row>
                <Row className="fs-3 mb-3" onClick={handleLibro} id="sustituto">
                  El sustituto
                </Row>
                <Row className="fs-3 mb-3" onClick={handleLibro} id="fuga">
                  La fuga
                </Row>
                <Row className="fs-3 mb-3" onClick={handleLibro} id="venganza">
                  El dulce beso de la venganza
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      {libro.nombre === "lineas" ? (
        <Lineas />
      ) : libro.nombre === "tierra" ? (
        <Tierra />
      ) : libro.nombre === "sustituto" ? (
        <Sustituto />
      ) : libro.nombre === "fuga" ? (
        <Fuga />
      ) : libro.nombre === "venganza" ? (
        <Venganza />
      ) : (
        <></>
      )}
      <Row className="fs-5 mt-3">
        {" "}
        <p>
          Inspirado en “sLAng: Historias sobre una misma historia” y en el cine
          negro y de acción en el que éste se inspiró a su vez, ASESINA cuenta
          la historia de Vlada, una ex-combatiente de la Guerra de Bosnia
          reconvertida a asesina profesional en las soleadas costas de
          California.{" "}
        </p>
        <p>
          Los cinco minilibrojuegos forman un librojuego completo de 300
          secciones, aunque serán las decisiones que tomes las que dirán cuál de
          todos ellos será tu próximo destino.{" "}
        </p>
      </Row>
    </Container>
  );
};
export default Libros;
