import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "../..";
import title from "../images/titulo.png";
import Description from "./Description";
import Conocimientos from "./Conocimientos";
import Drama from "./Drama";
import Heridas from "./Heridas";

const Character2 = (props) => {
  let personaje = props.personaje;
  let handicap;
  if (personaje.heridas === 1 || personaje.heridas === 2) {
    handicap = "Leve";
  }
  if (personaje.heridas === 3 || personaje.heridas === 4) {
    handicap = "Grave";
  }
  if (personaje.heridas === 5) {
    handicap = "Critico";
  }
  if (personaje.heridas === 6) {
    handicap = "Muerto";
  }
  return (
    <Container>
      <Row>
        <Col>
          <img alt="ASESINA" className="title" src={title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Description descripcion={personaje.descripcion} />
          <Conocimientos conocimientos={personaje.conocimientos} />
        </Col>
        <Col>
          <Drama drama={personaje.drama} />
          <Heridas heridas={personaje.heridas} />
          <Card className="bg-dark text-white">
            <Card.Title className="text-center">TUS COSAS</Card.Title>
            <ListGroup>
              {personaje.cosas.map((cosa) => {
                cosa = cosa[0].toUpperCase() + cosa.substring(1);
                return <ListGroup.Item key={cosa}>{cosa}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Title className="text-center">TUS PALABRAS</Card.Title>
            <ListGroup>
              {personaje.palabras.map((palabra) => {
                return <ListGroup.Item key={palabra}>{palabra}</ListGroup.Item>;
              })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Character2;
