import {Container } from "react-bootstrap";
import Partida from "./Partida"
const Partidas = () => {
  return (
    <Container>
     <Partida num={1}/>
     <Partida num={2}/>
     <Partida num={3}/>
    </Container>
  );
};
export default Partidas;
