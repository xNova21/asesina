import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MyNavbar from "../MyNavbar";
import Lateral from "./Lateral";
import Info from "./Info";
import principal from "../images/Home.png";
const Home = () => {
  return (
    <Container>
      <MyNavbar />
      <Row>
        <Col xs={4}>
          <Lateral  />
        </Col>
        <Col>
          <Info/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image fluid src={principal} alt="" />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
