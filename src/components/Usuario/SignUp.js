import { Form, Button, Container, Card, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
// Components
import MyNavbar from "../MyNavbar";

const Sign = () => {
  let url = "http://localhost:5000";

  let [info, setInfo] = useState({ name: "", password: "", password2:'' });
  let handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    // console.log(info);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    if (info.password !== info.password2) {
      console.log("las contraseñas no coinciden");
    }
    let log = await axios.post(`${url}/api/auth/signUp`, info);
    log = log.data;
    console.log(log);
  };
  return (
    <Container>
      <MyNavbar />
      <p className="mt-3 font text-center">
        Para guardar o cargar tu partida en la nube necesitarás tener una sesión
        iniciada.
      </p>
      <Row className="justify-content-center">
        <Card className="mt-3 text-center w-75 fs-5">
          <Form className="m-5  font" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Usuario"
                onChange={handleChange}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Repite la contraseña"
                name="password2"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Registrarse
            </Button>
          </Form>
        </Card>
      </Row>
      <Row></Row>
    </Container>
  );
};
export default Sign;
