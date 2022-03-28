import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Character from "../CharacterSheet/Character";

function Ficha(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        onClick={handleShow}
        className="fs-2  fontEspecial fw-bold"
      >
        Ficha Policial
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fs-1 fw-bold fontEspecial">
            Ficha policial
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Character personaje={props.personaje} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Ficha;
