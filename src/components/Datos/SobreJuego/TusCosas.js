import { ListGroup, Row } from "react-bootstrap";
const Cosas = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        Tus Cosas
      </p>
      <p className="fs-4 fw-normal">
        Esta lista son los objetos que tienes. A medida que vayas encontrando
        otros objetos, los puedes apuntar aquí. Empiezas la aventura con tu
        pistola con silenciador y dos de los siguientes objetos que puedes
        elegir a voluntad:
      </p>
      <ListGroup>
        <ListGroup.Item>Granada</ListGroup.Item>
        <ListGroup.Item>Puñal</ListGroup.Item>
        <ListGroup.Item>Cuerda</ListGroup.Item>
        <ListGroup.Item>Ganzúa</ListGroup.Item>

        
      </ListGroup>
    </Row>
  );
};
export default Cosas;
