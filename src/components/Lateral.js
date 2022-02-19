import { Image, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import lateral1 from "./images/lateral1.png";
import lateral2 from "./images/lateral2.png";
import lateral3 from "./images/lateral3.png";
import lateral4 from "./images/lateral4.png";
import lateral5 from "./images/lateral5.png";
import lateral6 from "./images/lateral6.png";

const Lateral = () => {
  return (
    <Col xs={5} className="mt-3">
      <Row>
        <Link to="/">
          <Image fluid src={lateral1} />
        </Link>
      </Row>
      <Row>
        <Link to="/libros">
          <Image fluid src={lateral2} />
        </Link>
      </Row>
      <Row>
        <Link to="/autores">
          <Image fluid src={lateral3} />
        </Link>
      </Row>
      <Row>
        <Link to="/juego">
          <Image fluid src={lateral4} />
        </Link>
      </Row>
      <Row>
        <Link to="/libros">
          <Image fluid src={lateral5} />
        </Link>
      </Row>
      <Row>
        <Link to="/libros">
          <Image fluid src={lateral6} />
        </Link>
      </Row>
    </Col>
  );
};
export default Lateral;
