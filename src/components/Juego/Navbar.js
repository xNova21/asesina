import {
  Navbar,
  Nav,
  Offcanvas,
  Container,
} from "react-bootstrap";
import Ficha from "./BotonFicha";
import Guardar from "./BotonGuardar";
import Cargar from "./BotonCargar";

const Navbara = (props) => {
  return (
    <Navbar  bg="light" expand={false} sticky="top">
      <Container fluid >
        <Navbar.Brand className="fontEspecial fs-3 fw-bold" href="#">Menú</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="fs-1 fw-bolder"
            >
              Asesina
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Ficha personaje={props.personaje} />
              {props.loged ? (
                "Login"
              ) : (
                <>
                  <Guardar />
                  <Cargar />
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Navbara;
