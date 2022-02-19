import { Row } from "react-bootstrap";
const Heridas = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        Heridas
      </p>
      <p className="fs-4 fw-normal">
        Si en el ejemplo anterior hubieses obtenido un Fracaso (un resultado
        negativo en el Chequeo), el pandillero te habría acertado con sus
        disparos. El texto te indicaría entonces que recibes una o varias
        Heridas. Empiezas la historia sin ninguna Herida, pero cada vez que
        recibas una, aumenta tu indicador de Heridas.
      </p>
      <p className="fs-4 fw-normal">
        - Si tienes 1 o 2 Heridas, pierdes sangre y esas cosas, pero no es nada
        grave.
      </p>
      <p className="fs-4 fw-normal">
        - Si acumulas 3 o 4 Heridas, la cosa se pone más peliaguda y estás
        malherido, por lo que recibes una Penalización de -1 a cualquier Chequeo
        que intentes.
      </p>
      <p className="fs-4 fw-normal">
        - Si tienes 5 Heridas estás en estado Crítico, con un pie en la tumba,
        vamos, y recibes una Penalización de -2 a cualquier Chequeo que
        intentes. 
      </p>
      <p className="fs-4 fw-normal">- Si recibes una sexta Herida estás muerto, fin de la
        historia.</p>
    </Row>
  );
};
export default Heridas;
