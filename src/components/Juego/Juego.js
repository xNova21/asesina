import Navbara from "./Navbar";
import Cookies from "universal-cookie";
import TextoJuego from "./TextoJuego";

import HistoriaTemp from "./HistoriaTemp"

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
    console.log("no hay datos")
  }

  return (
    <Container >
      <Navbara  personaje={personaje}/>
         <TextoJuego ficha={HistoriaTemp[0]}/>
      {/* <Card>
        <ButtonGroup>
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Card> */}
    </Container>
  );
};
export default Juego;
