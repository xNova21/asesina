import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Cargadas from "../Partidas/Cargar"
function Cargar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="link" onClick={handleShow} className="fs-2 fw-bolder">
          Cargar
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cargar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cargadas/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  export default Cargar