import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
const TextoJuego = (props) => {
  const [numTexto, setTexto] = useState(0);
  const maxTexto = props.ficha.texto.length - 1;
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

  console.log(numTexto, maxTexto);

  return (
    <>
      <Card style={{minHeight: "80vh"}}>
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
              Continuar
            </Button>
          </ButtonGroup>
        </Card>
      ) : (
        <>
          <Card>
            <ButtonGroup> {props.ficha.opciones.map((opcion)=>{
             return <Button variant="secondary">{opcion.texto}</Button>
            })}
            </ButtonGroup>
          </Card>
        </>
      )}
    </>
  );
};
export default TextoJuego;
