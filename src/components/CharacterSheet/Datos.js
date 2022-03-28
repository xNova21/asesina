import { Card, Row, Col, ListGroup } from "react-bootstrap";

const Datos = (props) => {
  let datos = props.datos;
  return (
    <Card className="mt-3 bg-dark">
      <Card.Title className="text-center  text-white">Datos</Card.Title>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>Nombre: {datos.nombre} </ListGroup.Item>{" "}
            <ListGroup.Item>Nacionalidad: {datos.nacionalidad}</ListGroup.Item>
            <ListGroup.Item>Pelo: {datos.pelo}</ListGroup.Item>
            <ListGroup.Item>Ojos: {datos.ojos}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
};
export default Datos;
