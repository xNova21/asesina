import { Table, ListGroup, Accordion } from "react-bootstrap";

let personaje = {
  nombre: "Vlada",
  nacionalidad: "Bosnia",
  sexo: "Mujer",
  arma: "Pistola con silenciador",
  ojos: "Azules",
  pelo: "Rubio",
  descripcion: ["fuerte", "agil", "guapa", "culta"],
  puntosConocimiento: 0,
  conocimientos: {
    arteMarcial: 0,
    atletismo: 0,
    armaFuego: 0,
    diplomacia: 0,
    callejeo: 0,
    ciencias: 0,
  },
  drama: 0,
  cosas: ["cuerda", "ganzua"],
  palabras: [],
  heridas: 0,
};
const Character = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Datos del sospechoso</Accordion.Header>
          <Accordion.Body>
            <Table striped variant="dark">
              <tbody>
                <tr>
                  <th>Nombre</th>
                  <td colSpan={3}>{personaje.nombre}</td>
                </tr>
                <tr>
                  <th>Nacionalidad</th>
                  <td>{personaje.nacionalidad}</td>
                  <th>Sexo</th>
                  <td>{personaje.sexo}</td>
                </tr>
                <tr>
                  <th>Ojos</th>
                  <td>{personaje.ojos}</td>
                  <th>Pelo</th>
                  <td>{personaje.pelo}</td>
                </tr>
                <tr>
                  <th colSpan={4}>Descripción</th>
                </tr>
                <tr>
                  {personaje.descripcion.map((one) => {
                    return <td key={one}>{one}</td>;
                  })}
                </tr>
                <tr>
                  <th>Arma</th>
                  <td colSpan={3}>{personaje.arma}</td>
                </tr>
                <tr>
                  <th>Heridas</th>
                  <td colSpan={3}>{personaje.heridas}</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>

        </Accordion>

        <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="1">
          <Accordion.Header>Características</Accordion.Header>
          <Accordion.Body>
            <Table striped>
              <tbody>
                <tr>
                  <th>Artes Marciales</th>
                  <td>{personaje.conocimientos.arteMarcial}</td>
                  <th>Atletismo</th>
                  <td>{personaje.conocimientos.atletismo}</td>
                </tr>
                <tr>
                  <th>Arma de Fuego</th>
                  <td>{personaje.conocimientos.armaFuego}</td>
                  <th>Diplomacia</th>
                  <td>{personaje.conocimientos.diplomacia}</td>
                </tr>
                <tr>
                  <th>Callejeo</th>
                  <td>{personaje.conocimientos.callejeo}</td>
                  <th>Ciencias</th>
                  <td>{personaje.conocimientos.ciencias}</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>      </Accordion>

        <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="2">
          <Accordion.Header>Objetos</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {personaje.cosas.map((cosa) => {
                return <ListGroup.Item key={cosa}>{cosa}</ListGroup.Item>;
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Character;
