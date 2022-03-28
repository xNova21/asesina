import Navbara from "./Navbar";
import Cookies from "universal-cookie";

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
  const cookies = new Cookies();
  let personaje = cookies.get("personaje");
  if(!personaje){
    console.logf("no hay datos")
  }

  return (
    <Container >
      <Navbara  personaje={personaje}/>
      <Card >
        <Card.Body >
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
