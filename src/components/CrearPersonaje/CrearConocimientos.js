import { useState } from "react";
import { Card, ListGroup, Row, Col, Container, Button } from "react-bootstrap";
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
  const confirmar = () => {
    props.onCambiosHandle("conocimientos", conocimientos);
    props.onCambiosHandle("puntosConocimiento", true);
  };
  return (
    <Container>
      <Row className="fs-3">
        <Card className="bg-dark text-white mt-3 text-center ">
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
      </Row>
      {puntos === 0 ? (
        <Row>
          <Button variant="secondary" className="mt-3 fs-3" onClick={confirmar}>
            Confirmar
          </Button>
        </Row>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default CrearConocimientos;
