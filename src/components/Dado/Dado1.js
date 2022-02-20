import { useState } from "react";
import "./Dado.css";
const Dado = () => {
  let [style, setStyle] = useState({
    transform: "translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
  });
  let time = 2;
  let tirar = () => {
    setStyle({
      transform: "translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
    });
    setTimeout(() => {
      console.log(style);
      const randomValue = Math.floor(Math.random() * 6 + 1);
      console.log(`randomValue: ${randomValue}`);

      switch (randomValue) {
        case 1:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`,
          });
          break;
        case 2:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`,
          });
          break;
        case 3:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`,
          });
          break;
        case 4:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`,
          });
          break;
        case 5:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`,
          });
          break;
        case 6:
          setStyle({
            transition: "transform 2s ease 0s",
            transform: `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`,
          });
          break;
      }
    }, time * 100);
  };
  return (
    <div className="container1">
      <div className="cube" style={style} onClick={tirar}>
        <div className="cube-face blanco front">
          <div className="inside">
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face blanco back">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face blanco left">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face blanco right">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face blanco top">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="cube-face blanco bottom">
          <div className="inside">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dado;
