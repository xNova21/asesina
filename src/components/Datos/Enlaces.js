import { Container, Row, Col, Image } from "react-bootstrap";
import MyNavbar from "../MyNavbar";
import Lateral from "../Lateral";
const Enlaces = () => {
  const pageHandler = (event) => {
    window.location.href = event.target.innerText;
  };
  const github = () => {
    window.location.href = "https://github.com/xNova21/asesina";
  };
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Lateral />
        <Col className="mt-3">
          <p className="fs-1 mb-3 fontEspecial fw-bold">Enlaces</p>
          <p className="mb-3 fw-bolder">Página web de Nosolorol Ediciones:</p>
          <p onClick={pageHandler} className="fw-normal">
            http://www.nosolorol.com
          </p>
          <p className="mb-3 fw-bolder">Revista online NSR:</p>
          <p onClick={pageHandler} className="fw-normal">
            http://www.nosolorol.com/revista/
          </p>
          <p className="mb-3 fw-bolder">Página web de Felipe Fernández: </p>
          <p onClick={pageHandler} className="fw-normal">
            http://www.ffilustracion.com/
          </p>
          Enlace al proyecto en GitHub
          <Image
            onClick={github}
            height={100}
            alt="171x180"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default Enlaces;
