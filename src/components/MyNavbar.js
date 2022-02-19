import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
let loged = false
const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      {loged === false ? <Container>
        <Navbar.Brand>sLang: La asesina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/iniciosesion">Iniciar sesión</Nav.Link>
            <Nav.Link href="">Registro</Nav.Link>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sobre el autor
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sobre el proyecto</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container> : <Container>
        <Navbar.Brand href="/">sLang loged</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>}
    </Navbar>
  );
};
export default MyNavbar;
