import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import Lateral from "../Lateral";
import MyNavbar from "../MyNavbar";
import FichaPolicial from "./SobreJuego/FichaPolicial";
import Indice from "./SobreJuego/Indice";
const SobreJuego = () => {
  let [instrucciones, setInstruciones] = useState(false);
  const handleInstrucciones = () => {
    if (instrucciones === true) {
      setInstruciones(false);
    } else {
      setInstruciones(true);
    }
  };
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Lateral />
        <Col className="mt-5 fontEspecial">
          <Card>
            <ListGroup>
              <Button className="mb-1 fs-3" href="/juego/CrearPersonaje">Nueva Partida</Button>
              <Button className="mb-1 fs-3">Continuar</Button>
              <ListGroupItem
                className="mb-1 fs-3 text-center"
                onClick={handleInstrucciones}
              >
                Instrucciones
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Container>{instrucciones ? <Indice /> : <FichaPolicial />}</Container>
      </Row>
    </Container>
  );
};
export default SobreJuego;
