import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

const ModalChequeo = (props) => {
    console.log(props)
  const textos = useRef();
  const final = useRef();
  const resultadofinal = useRef();
  const texto = gsap.utils.selector(textos);
  const continuar = useRef()

  const [show] = useState(props.visible);
  const handleClose = () => {
    if(resultado >= 0){
        props.onChangeFicha(props.exito)
    }
    else{props.onChangeFicha(props.fracaso)}
    props.onChangePantalla("textoJuego")};
  let resultado =
    props.dados.dadoBlanco -
    props.dados.dadoRojo +
    props.modificadores.dificultad;
  useEffect(() => {
    gsap
      .timeline()
      .from(texto("p"), { xPercent: -100, opacity: 0, stagger: 0.33 })
      .from(final.current, { opacity: 0, x: 100 })
      .from(resultadofinal.current, { delay: 1, opacity: 0, yPercent: 100 }).from(continuar.current, {opacity: 0});
  }, []);
  return (
    <>
      <Modal show={show} animation={true} className="font">
        <Modal.Header>
          <Modal.Title>Resultado del chequeo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="text-center">
            <Col ref={textos}>
              <p>Dado a favor: +{props.dados.dadoBlanco}</p>
              <p>Dado en contra: -{props.dados.dadoRojo}</p>
              <p>Dificultad: {props.modificadores.dificultad}</p>
              {props.modificadores.conocimientos.map((conocimiento) => {
                if (props.personaje.conocimientos[conocimiento] !== 0) {
                  resultado += props.personaje.conocimientos[conocimiento];
                  return (
                    <p key={conocimiento}>
                      {conocimiento}: +
                      {props.personaje.conocimientos[conocimiento]}
                    </p>
                  );
                }
              })}
              {props.personaje.descripcion.map((descripcion) => {
                if (props.modificadores.descripcion[descripcion]) {
                  resultado += props.modificadores.descripcion[descripcion];
                  return (
                    <p key={descripcion}>
                      {descripcion.charAt(0).toUpperCase() +
                        descripcion.slice(1)}
                      : +{props.modificadores.descripcion[descripcion]}
                    </p>
                  );
                }
              })}
            </Col>
            <Col className="h2" ref={final}>
              {resultado}
            </Col>
          </Row>
          <Row>
            <Col className="text-center h1 fontEspecial fw-bold" ref={resultadofinal}>
              {resultado >= 0 ? "Éxito" : "Fracaso"}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} ref={continuar}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalChequeo;
