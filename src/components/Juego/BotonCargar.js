import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Cargadas from "../Partidas/Cargar"
function Cargar() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow} className="fs-2 fontEspecial fw-bold">
          Cargar
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fs-1 fw-bold fontEspecial">Cargar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cargadas/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  export default Cargar