import { useState } from "react";
import { Card, ListGroup, Row, Col, Container } from "react-bootstrap";
const CrearConocimientos = (props) => {
  let [conocimientos, setConocimientos] = useState(props.conocimientos);
  let [puntos, setPuntos] = useState(7);
  let tipoConocimiento = Object.keys(conocimientos);
  const puntosHandler = (event) => {
    if (event.target.innerText === "+" && puntos !== 0) {
      setPuntos(puntos - 1);
      conocimientos[event.target.id]++;
      console.log(event.target);
    } else if (
      event.target.innerText === "-" &&
      conocimientos[event.target.id] !== 0
    ) {
      setPuntos(puntos + 1);
      conocimientos[event.target.id]--;
      console.log(event.target);
    }
  };
  return (
    <Container>
      <Card className="bg-dark text-white mt-3 text-center">
        <Card.Title>Puntos restantes</Card.Title>
        <ListGroup>
          <ListGroup.Item>{puntos}</ListGroup.Item>
        </ListGroup>
      </Card>
      <Card className="bg-dark text-white mt-3">
        <Card.Title className="text-center">CONOCIMIENTOS</Card.Title>
        <ListGroup>
          {tipoConocimiento.map((conocimiento) => {
            return (
              <ListGroup.Item key={conocimiento}>
                <Row>
                  <Col xs={7}>{conocimiento}</Col>
                  <Col id={conocimiento} onClick={puntosHandler}>
                    -
                  </Col>
                  <Col>{conocimientos[conocimiento]}</Col>
                  <Col id={conocimiento} onClick={puntosHandler}>
                    +
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </Container>
  );
};
export default CrearConocimientos;
