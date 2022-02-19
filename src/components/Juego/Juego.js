import Navbara from "./Navbar";
import {
  Container,
  Card,
  ButtonGroup,
  Button,
  Navbar,
  Figure,
  Nav,
} from "react-bootstrap";
const Juego = () => {
  return (
    <Container>
      <Navbara/>
      <Card>
        <Card.Body>
          <p>texto</p>
          <Figure>
            <Figure.Image
              alt=""
              src=""
            />
          </Figure>
        </Card.Body>
      </Card>
      <Card>
        <ButtonGroup>
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
};
export default Juego;
