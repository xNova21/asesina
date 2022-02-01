import Character from "./Character";
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
      "Artes Marciales": 0,
      Atletismo: 0,
      "Armas fuego": 0,
      Diplomacia: 0,
      Callejeo: 0,
      Ciencias: 0,
    },
    drama: 0,
    cosas: ["cuerda", "ganzua"],
    palabras: [],
    heridas: 4,
  };
const Game = () =>{
return(<Character personaje={personaje}/>)
}
export default Game