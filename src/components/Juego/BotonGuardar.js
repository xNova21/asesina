import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Guardadas from "../Partidas/Guardar"
function Guardar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow} className="fs-2 fw-bolder">
          Guardar
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fs-1 fw-bolder">Guardar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Guardadas/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  export default Guardar