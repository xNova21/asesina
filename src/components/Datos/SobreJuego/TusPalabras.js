import { Row } from "react-bootstrap";
const TusPalabras = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        Tus Palabras
      </p>
      <p className="fs-4 fw-normal">
        En el texto se te indicará que se apunta o borra una serie de Palabras.
      </p>
      <p className="fs-4 fw-normal">No te preocupes más por este apartado.</p>
    </Row>
  );
};
export default TusPalabras;
