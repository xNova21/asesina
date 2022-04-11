import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
const TextoJuego = (props) => {
  const [numTexto, setTexto] = useState(0);
  const maxTexto = (props.ficha.texto.length - 1);
  const avanzar = () => {
    if (numTexto < maxTexto) {
      let nuevoNum = numTexto + 1;
      setTexto(nuevoNum);
    }
  };
  const volver = () => {
    if (numTexto > 0) {
      let nuevoNum = numTexto - 1;
      setTexto(nuevoNum);
    }
  };
  const handleChequeo = ()=>{
    props.onChangePantalla("chequeo")
    setTexto(0)
  };
  const handleFinal=()=>{
    // navegar a nuevo libro
  };
  const handleAccion=()=>{
    props.onChangePantalla("accion")
    setTexto(0)
  };
  const handleOpcion=(numero)=>{
    props.onChangeFicha(numero)
    setTexto(0)
  }
  

  return (
    <>
      <Card style={{ minHeight: "70vh" }}>
        <Card.Text className="m-1">{props.ficha.texto[numTexto]}</Card.Text>
        <Card.Img src={props.ficha.imagen} alt=""></Card.Img>
      </Card>
      {numTexto !== maxTexto ? (
        <Card className="">
          <ButtonGroup>
            <Button
              onClick={volver}
              variant="secondary"
              style={{ display: numTexto === 0 ? "none" : "" }}
            >
              Volver
            </Button>
            <Button onClick={avanzar} variant="secondary">
              Siguiente
            </Button>
          </ButtonGroup>
        </Card>
      ) : (
        <>
          <Card>
            {/* <ButtonGroup> {props.ficha.opciones ? props.ficha.opciones.map((opcion)=>{
             return <Button variant="secondary" >{opcion.texto}</Button>
            }): props.ficha.chequeo ? <Button variant="warning">Chequeo</Button> : <Button>{props.ficha.accion}</Button>}
            </ButtonGroup> */}

            {props.ficha.final ? (
              <Button variant="success">{props.ficha.final}</Button>
            ) : props.ficha.chequeo ? (
              <Button variant="warning" onClick={handleChequeo}> Chequeo</Button>
            ) : props.ficha.comprobacion ? (
              <Button> Continuar tras comprobacion</Button>
            ) : props.ficha.accion ? (
              <Button onClick={handleAccion}>Continuar (accion)</Button>
            ) : (
              <ButtonGroup>
                {props.ficha.opciones.map((opcion) => {
                  if (opcion.condicional) {
                    if (
                      opcion.condicional.cosas ||
                      opcion.condicional.palabra
                    ) {
                      // cambiar if para ver si la ficha del personaje incluye ese condicional
                      return <Button key={opcion.texto} onClick={()=>(handleOpcion(opcion.exito))}>{opcion.texto}</Button>;
                    } else {
                      return;
                    }
                  } else {
                    return <Button key={opcion.texto} onClick={()=>(handleOpcion(opcion.exito))}>{opcion.texto}</Button>;
                  }
                })}
              </ButtonGroup>
            )}
          </Card>
        </>
      )}
    </>
  );
};
export default TextoJuego;
