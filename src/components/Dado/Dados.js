import { Container, Row, Col } from "react-bootstrap";
import Dado from "./Dado1";
import Dado2 from "./Dado2";
const Dados = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Dado />
        </Col>
        <Col>
          <Dado2 />
        </Col>
      </Row>
    </Container>
  );
};
export default Dados;
