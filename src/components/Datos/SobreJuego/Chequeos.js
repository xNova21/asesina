import { Row } from "react-bootstrap";
const Chequeo = (props) => {
  return (
    <Row className="mt-5">
      <p className="fs-2" id={props.id}>
        CHEQUEOS
      </p>
      <p className="fs-4 fw-normal">
        Cada vez que intentas hacer algo difícil o cuando hay una posibilidad de
        fracasar, tendrás que hacer un Chequeo. Para ello, se te indicará una
        Dificultad, el conocimiento que interviene y los modificadores, que
        dependen de los adjetivos que has elegido o de los objetos que tengas.
        Se sumaran todos los modificadores para obtener el modificador total.
        Luego tira 2 dados de 6 caras (2D6), de diferente color (uno blanco y
        otro rojo, por ejemplo) donde el blanco es el positivo y el rojo el
        negativo. El resultado de ambos dados se obtiene restándole el resultado
        del negativo al positivo, con lo que puedes obtener de -5 (horrible) a
        +5 (¡bien hecho!). A este número se le suma el modificador que has
        obtenido antes. Si el 5 resultado final es cero o más, tienes un Éxito
        en el Chequeo. Si el resultado es inferior a cero, Fracasas.
      </p>
      <p className="fs-4 fw-normal">
        Ejemplo: Un pandillero me dispara desde una esquina. Decido saltar sobre
        él y dejarlo fuera de combate.
      </p>
      <p className="fs-4 fw-normal">
        Haz un Chequeo. Dificultad -4. Artes Marciales. Agil +1. Temeraria +1.
      </p>
      <p className="fs-4 fw-normal">
        Mi personaje tiene +2 en Artes Marciales y es Ágil, pero no Temeraria.
        Por tanto, el modificador total es de -1 (-4 por la dificultad, +2 en
        Artes Marciales, +1 por ser Ágil). Tiro 2D6. El positivo sale un 4 y el
        negativo un 3, con lo que queda un +1 de resultado. Le aplico el
        modificador total (-1) y obtengo un resultado de 0. Por tanto, el total
        del Chequeo es 0, justo para obtener un Éxito, con lo que salto sobre el
        pandillero y le sacudo un puñetazo en la barbilla.
      </p>
    </Row>
  );
};
export default Chequeo;
