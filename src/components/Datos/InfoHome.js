import { Container, Row, Col } from "react-bootstrap";
const InfoHome = () => {
  return (<Container>
    <Row className="fs-3 mt-5"><Col>
      <p>
        Bienvenid<span className="font">@</span>s a la adaptación web de Asesina, una serie de mini-librojuegos de J. L. López Morales.
      </p>
      <p>
        El material contenido en esta página es propiedad de sus respectivos
        autores, que autorizan su libre distribución en formato electrónico y
        papel siempre que se conserve íntegro y de manera gratuita.
      </p></Col>
    </Row>
    </Container>
  );
};
export default InfoHome;
