import { Container, Card, Row, Col } from "react-bootstrap";
const Partida = (props) => {
  let datos = {
    libro: "Lineas",
    fecha: new Date(2021, 5, 12),
    numero: "",
    personaje: {
      nombre: "Vlada",
      nacionalidad: "Bosnia",
      sexo: "Mujer",
      arma: "Pistola con silenciador",
      ojos: "Azules",
      pelo: "Rubio",
      descripcion: ["fuerte", "agil", "guapa", "culta"],
      puntosConocimiento: 0,
      conocimientos: {
        "Artes Marciales": 0,
        Atletismo: 0,
        "Armas fuego": 0,
        Diplomacia: 4,
        Callejeo: 0,
        Ciencias: 0,
      },
      drama: 0,
      cosas: ["cuerda", "ganzua"],
      palabras: [],
      heridas: 4,
    },
  };
  const month = datos.fecha.toLocaleString("es-es", { month: "long" });
  const day = datos.fecha.toLocaleString("es-es", { day: "2-digit" });
  const year = datos.fecha.getFullYear();
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="text-center">{props.num}</Card.Header>
        <Card.Body>
          <Row>
            <Col>Libro: </Col>
            <Col>{datos.libro}</Col>
          </Row>
          <Row>
            <Col>Guardado</Col>
            <Col>
              {day} {month} {year}
            </Col>
          </Row>
          <Row>
            <Col>Heridas</Col>
            <Col>{datos.personaje.heridas}</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Partida;
