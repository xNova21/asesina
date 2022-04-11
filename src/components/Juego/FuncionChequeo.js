import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Dado from "../Dado/Dado1";
import ModalChequeo from "./ModalChequeo";
import { useState } from "react";
const FuncionChequeo = (props) => {
  const [activo, setActivo] = useState(false);
  const [resultado, setResultado] = useState({});
  const [mostrarModal, setMostrar] = useState(false)
  const tirar = () => {
    setResultado({
      dadoBlanco: Math.floor(Math.random() * 6 + 1),
      dadoRojo: Math.floor(Math.random() * 6 + 1),
    });
    setActivo(true);
    setTimeout(()=>{
      setMostrar(true)
    }, 3000)
  };

  return (
    <Container>
      <Card style={{ minHeight: "50vh" }}>
        <Container>
          <Row>
            <Col>
              <Dado
                color="blanco"
                valor={resultado.dadoBlanco}
                activo={activo}
              />
            </Col>
            <Col>
              <Dado color="rojo" valor={resultado.dadoRojo} activo={activo} />
            </Col>
          </Row>
        </Container>{" "}
      </Card>
      <Card>
        {
          <Button onClick={tirar} disabled={resultado.dadoBlanco}>
            Tirar dados
          </Button>
        }
      </Card>
      {mostrarModal && <ModalChequeo personaje={props.personaje} dados={resultado} onChangePantalla={props.onChangePantalla} visible={mostrarModal} modificadores={props.modificadores}/>}
    </Container>
  );
};
export default FuncionChequeo;
