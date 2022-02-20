import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import src from "../images/Juego/Intro.png";
const Intro = (props) => {
  let [intro, setIntro] = useState({
    textos: [
      "Soy Vlada, antigua combatiente en Bosnia, asesina profesional ahora.Por un precio, puedo matar a quien sea, sin importar su raza, sexo, ideología o religión. Para mí, sólo es trabajo. ",
      "Después de cinco años de guerra civil, en los que pasé de ser una simple estudiante a convertirme en una de las mejores tiradoras del ejército, abandoné mi país y, con el dinero conseguido durante la guerra, me instalé en los Estados Unidos. Las ruinas, el sufrimiento, los bombardeos, los  cuerpos mutilados, todo quedó atrás y fue substituido por la soleada  California, sus avenidas llenas de palmeras y sus atardeceres de anuncio de televisón. ",
      ,
      "Un contacto de un grupo paramilitar ruso que traficaba en la costa oeste me introdujo en el mundo de la mafia, donde no tardé en recibir mi primer encargo: matar a un político local cuya popularidad estaba subiendo como la espuma a base de inflamar el odio y la indignación de los inmigrantes de Los Angeles. El hombre murió la noche siguiente, envenenado, aunque los informes forenses fueron falseados (previo pago, por supuesto) para que la versión oficial adujera su muerte a un problema cardíaco. ",
      "Eso fue hace dos años; durante este tiempo he cumplido con cada trabajo que me han encomendado, y ganado un montón de dinero con ello. Soy Vlada, una asesina. Hay gente que vende coches, vende electrodomésticos o vende su cuerpo para vivir. Yo mato a personas, algunos lo merecen, otros no, pero, ¿quién soy yo para decidirlo?",
    ],
    imagen: "./images/Juego/Intro.png",
  });
  return (
    <Container>
      {intro.textos.map((texto) => {
        return <p key={intro.textos.indexOf(texto)} className="mt-3 fs-3">{texto}</p>;
      })}
      <Row>
        <Image fluid src={src} />
      </Row>
      <Row>
        <Button variant="secondary" className="mb-5 fs-2" onClick={props.onLeido}>
          Empezar
        </Button>
      </Row>
    </Container>
  );
};
export default Intro;
