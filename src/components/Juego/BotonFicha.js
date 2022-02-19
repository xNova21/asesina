import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Character from "../CharacterSheet/Character";

function Ficha() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow}>
          Ficha Policial
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Ficha policial</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Character/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  export default Ficha