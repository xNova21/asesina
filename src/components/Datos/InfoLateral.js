import { Container, Row, Col } from "react-bootstrap";
import Lateral from "../Lateral";
import MyNavbar from "../MyNavbar";

const InfoLateral = () => {
  
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Lateral />
        <Col className="fs-3 mt-5 fontEspecial">
          <p>
            Este es un proyecto realizado por Lucía Acosta para practicar programación sin ánimo de lucro.
          </p>
          <p>El material contenido en esta página es propiedad de sus respectivos
        autores, que autorizan su libre distribución de manera gratuita.</p>
        </Col>
      </Row>
      
    </Container>
  );
};
export default InfoLateral;
