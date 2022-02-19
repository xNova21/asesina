import { Row, ListGroup } from "react-bootstrap";
const Conocimientos = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        Conocimientos
      </p>
      <p className="fs-4 fw-normal">
        El segundo paso será escoger tus Conocimientos, aquello que has
        aprendido durante tu vida. Dispones de 7 Puntos a repartir entre los
        siguientes conocimientos, dando un valor máximo de +3 y uno mínimo de 0
        a cada uno de ellos:
      </p>
      <ListGroup className="fs-4 ">
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Artes Marciales: </span>Eres experta en combate sin armas.
        </ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Atletismo: </span>Eres muy buena saltando, corriendo o haciendo
          acrobacias.
        </ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Armas de Fuego: </span>: Eres muy hábil con pistolas, escopetas
          y demás armas.
        </ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Diplomacia: </span>: Eres muy buena dialogando, negociando,
          mintiendo o sonsacando información.
        </ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Callejeo: </span>: Conoces el mundo de la calle, gente,
          contactos y cosas útiles en la ciudad.
        </ListGroup.Item>
        <ListGroup.Item className="fs-4 fw-normal">
          <span>Ciencias: </span> Sabes de electrónica, física, química, etc.
        </ListGroup.Item>
      </ListGroup>
      <p className="fs-4 fw-normal mt-3">
        Ejemplo: Puedes repartir tus 7 puntos de conocimientos de la siguiente
        forma: +3 a Artes Marciales, +2 a Armas de Fuego, +1 a Atletismo, +1 a
        Diplomacia, con lo que Callejeo y Ciencias se quedan con un 0
      </p>
    </Row>
  );
};
export default Conocimientos;
