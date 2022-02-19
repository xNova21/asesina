import { Row } from "react-bootstrap";
const Descripcion = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>Descripción</p>
      <p className="fs-4 fw-normal">
        El primer paso es describir cómo es tu personaje. Para ello elegirás 
        4 adjetivos de la siguiente lista y se apuntarán en tu Ficha Policial.
        Dependiendo de los adjetivos que elijas, tu personaje será más bueno en
        unas cosas o en otras. Por ejemplo, si eres Ágil serás bueno esquivando
        golpes, corriendo, etc. En cambio, si eliges Guapa, tu atractivo
        personal te permitirá obtener información con mayor facilidad. Elige con
        cuidado los 4 adjetivos que mejor describan cómo es tu personaje.
      </p>
    </Row>
  );
};
export default Descripcion;
