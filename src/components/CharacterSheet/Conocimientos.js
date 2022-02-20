import { Card, ListGroup, Row, Col } from "react-bootstrap";
const Conocimientos = (props) =>{
     let conocimientos = props.conocimientos
     let tipoConocimiento = Object.keys(conocimientos);

    return (<Card className="bg-dark text-white mt-3">
    <Card.Title className="text-center">CONOCIMIENTOS</Card.Title>
    <ListGroup>
      {tipoConocimiento.map((conocimiento) => {
        return (
          <ListGroup.Item key={conocimiento}>
            <Row>
              <Col xs={9}>{conocimiento}</Col>
              <Col>{conocimientos[conocimiento]}</Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  </Card>)
}
export default Conocimientos