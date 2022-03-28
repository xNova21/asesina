import { Navbar, Container, Nav } from "react-bootstrap";
const MyNavbar = (props) => {
  let loged = props.loged
  return (
    <Navbar bg="light" expand="lg" className="fontEspecial fw-bold">
      <Container className="fs-5">
        <Navbar.Brand>sLang: Asesina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!loged ? (
              <> 
                <Nav.Link href="/iniciosesion">Iniciar sesión</Nav.Link>
                <Nav.Link href="/registro">Registro</Nav.Link>
              </>
            ) : (
              <></>
            )}
            <Nav.Link href="/juego">Juego</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
