import { Row } from "react-bootstrap";
const PuntosDrama = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        Puntos de Drama
      </p>
      <p className="fs-4 fw-normal">
        Empiezas la historia con 3 Puntos de Drama. Estos puntos representan
        aquella situación de peligro o tensión en que decides dar el todo por el
        todo. Puedes utilizar cuantos Puntos de Drama desees en cualquier
        Chequeo, sumándolos a tu tirada en ese momento. Por supuesto, debes
        decidir cuántos Puntos de Drama usas antes de realizar la tirada.
        Después, se reduciran esos Puntos de tu Ficha Policial.
      </p>
      <p className="fs-4 fw-normal">
        Ejemplo: Te has metido en una pelea de bar. El otro tipo coge una
        botella y te amenaza con ella. Le lanzas un puñetazo, pero quieres estar
        segura de dejarlo ko, por lo que decides usar 2 Puntos de Drama. Haces
        el Chequeo de forma normal, pero obtienes un +2 a tu tirada por los 2
        Puntos de Drama. Obtienes un Éxito y estampas tu puño en la cara del
        palurdo. Después restas los 2 Puntos de Drama de tu Ficha Policial.{" "}
      </p>
    </Row>
  );
};
export default PuntosDrama;
