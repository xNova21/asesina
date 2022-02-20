import { Container, Row, Col } from "react-bootstrap";
import Dado from "./Dado1";
const Dados = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Dado color="blanco"/>
        </Col>
        <Col>
          <Dado color="rojo"/>
        </Col>
      </Row>
    </Container>
  );
};
export default Dados;
