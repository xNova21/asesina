import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MyNavbar from "../MyNavbar";
import Lateral from "../Lateral";
import InfoHome from "./InfoHome";
import principal from "../images/Home.png";
const Home = () => {
  return (
    <Container >
      <MyNavbar />
      <Row>
        <Lateral />
        <Col>
          <InfoHome />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Image fluid src={principal} alt="" />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
