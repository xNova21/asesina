import { Table } from "react-bootstrap";

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
      <Table striped>
        <thead>
          <tr>
            <th colSpan={4}>Datos del sospechoso</th>
          </tr>
        </thead>
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
            <th>Arma</th>
            <td colSpan={3}>{personaje.arma}</td>
          </tr>
          <tr>
            <th>Heridas</th>
            <td colSpan={3}>{personaje.heridas}</td>
          </tr>
        </tbody>
      </Table>
      <Table striped>
        <thead>
          <tr>
            <th colSpan={4}>Características</th>
          </tr>
        </thead>
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
      <Table>
        <thead>
          <tr>
            <th>Objetos</th>
          </tr>
        </thead>
        <tbody>
          {personaje.cosas.map((cosa) => {
            return (
              <tr>
                <td>{cosa}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Character;
