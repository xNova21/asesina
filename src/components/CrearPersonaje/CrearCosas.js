import { useState } from "react";
import { Container, Card, ListGroup, Button, Row } from "react-bootstrap";

const CrearCosas = (props) => {
  let [cosas, setCosas] = useState([]);
  let [todo, setTodo] = useState(false);

  const cosasHandle = (event) => {
    if (cosas.length < 2 && !cosas.includes(event.target.id)) {
      cosas.push(event.target.id);
      event.target.classList.add("active");
    } else if (cosas.includes(event.target.id)) {
      cosas.splice(cosas.indexOf(event.target.id), 1);
      event.target.classList.remove("active");
    }

    if (cosas.length === 2) {
      setTodo(true);
    } else {
      setTodo(false);
    }
  };

  const confirmar = () => {
    props.onCambiosHandle("cosas", cosas);
  };
  return (
    <Container className="fs-3">
      <p className="mt-3 font">
        Empiezas la aventura con tu pistola con silenciador y dos de los
        siguientes objetos que puedes elegir a voluntad:{" "}
      </p>
      <Card className="bg-dark text-white mt-3 fontEspecial fw-bold">
        <Card.Title className="text-center fs-3">Tus Cosas</Card.Title>
        <ListGroup>
          <ListGroup.Item onClick={cosasHandle} id="granada">Granada</ListGroup.Item>
          <ListGroup.Item onClick={cosasHandle} id="puñal">Puñal</ListGroup.Item>
          <ListGroup.Item onClick={cosasHandle} id="cuerda">Cuerda</ListGroup.Item>
          <ListGroup.Item onClick={cosasHandle} id="ganzua">Ganzúa</ListGroup.Item>
        </ListGroup>
      </Card>
      {todo ? <Row><Button variant="secondary" onClick={confirmar} className="mt-3 fs-3">Confirmar</Button></Row> : <></>}

    </Container>
  );
};
export default CrearCosas;
