import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
// Components
import MyNavbar from "../MyNavbar";

const Login = () => {
  let url = "http://localhost:5000";
  let [info, setInfo] = useState({ name: "", password: "" });
  let handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    let log = await axios.post(`${url}/api/auth/login`, info);
    log = log.data
    console.log(log);
  };
  return (
      <Container>
      <MyNavbar />
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText" >
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Nombre de usuario"
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
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      </Container>
  );
};
export default Login;
