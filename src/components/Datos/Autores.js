import { Container, Col, Row } from "react-bootstrap";

import MyNavbar from "../MyNavbar";
import Lateral from "../Lateral";
const Autores = () => {
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Lateral />
        <Col>
          <Container className="mt-5 fontEspecial">
            <p className="fs-2 fw-bolder">Autores del libro</p>
            <p className="fs-2 fw-bolder">Texto de:</p>
            <p className="fs-4 ">José Luis López Morales</p>
            <p className="fs-2 fw-bolder">Ilustración de portada de:</p>
            <p className="fs-4">Felipe Fernández</p>
            <p className="fs-2 fw-bolder">
              Ilustraciones interiores y marcos de:
            </p>
            <p className="fs-4">
              Jaime García Mendoza y Alejandro Monge
            </p>
            <p className="fs-2 fw-bolder">Maquetación y Edición de:</p>
            <p className="fs-4">Axel Alonso</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Autores;
