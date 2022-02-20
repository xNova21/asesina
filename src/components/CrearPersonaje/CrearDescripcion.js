import { useState } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import MyNavbar from "../MyNavbar";
const CrearDescripcion = (props) => {
  let descripcion = [];
  let [todo, setTodo] = useState(false);
  const descripcionHandle = (event) => {
    if (descripcion.length < 4 && !descripcion.includes(event.target.id)) {
      descripcion.push(event.target.id);
      event.target.classList.add("active");
    } else if (descripcion.includes(event.target.id)) {
      descripcion.splice(descripcion.indexOf(event.target.id), 1);
      event.target.classList.remove("active");
    }

    if (descripcion.length === 4) {
      setTodo(true);
    } else {
      setTodo(false);
    }
  };

  const confirmar =()=>{
    props.onCambiosHandle("descripcion", descripcion)
  }
  return (
    <Container>
      <p className="mt-3">Elige 4 caracteristicas que definan a tu personaje.</p>
      <Card className="bg-dark text-white mt-3">
        <Card.Title className="text-center">DESCRIPCION</Card.Title>
        <ListGroup>
          <ListGroup.Item id="fuerte" onClick={descripcionHandle}>
            Fuerte
          </ListGroup.Item>
          <ListGroup.Item id="agil" onClick={descripcionHandle}>
            Ágil
          </ListGroup.Item>
          <ListGroup.Item id="diestra" onClick={descripcionHandle}>
            Diestra
          </ListGroup.Item>
          <ListGroup.Item id="temeraria" onClick={descripcionHandle}>
            {" "}
            Temeraria
          </ListGroup.Item>
          <ListGroup.Item id="guapa" onClick={descripcionHandle}>
            Guapa
          </ListGroup.Item>
          <ListGroup.Item id="logica" onClick={descripcionHandle}>
            Lógica
          </ListGroup.Item>
          <ListGroup.Item id="fria" onClick={descripcionHandle}>
            Fria
          </ListGroup.Item>
          <ListGroup.Item id="tenaz" onClick={descripcionHandle}>
            Tenaz
          </ListGroup.Item>
          <ListGroup.Item id="violenta" onClick={descripcionHandle}>
            Violenta
          </ListGroup.Item>
          <ListGroup.Item id="culta" onClick={descripcionHandle}>
            Culta
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {todo ? <Button onClick={confirmar} className="mt-3">Confirmar</Button> : <></>}
    </Container>
  );
};
export default CrearDescripcion;
