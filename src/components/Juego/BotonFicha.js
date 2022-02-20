import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Character from "../CharacterSheet/Character";

function Ficha(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow} className="fs-2 fw-bolder">
          Ficha Policial
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fs-1 fw-bolder">Ficha policial</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Character personaje={props.personaje}/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  export default Ficha