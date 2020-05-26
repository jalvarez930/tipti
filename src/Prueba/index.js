import React from "react";
import { arreglo } from "../Helpers";
const Prueba = () => {
  return arreglo.map((element, index) => {
    return (
      <div className="filaPrueba">
        <div className="filaIzquierda">
          <input type="text" value={element.name} />

          <input type="text" value={element.status} />
        </div>
        <div className="filaIzquierda">
          <img src={element.image} className="tamanioPrueba" alt="" />
        </div>
        <div className="separador">
          <hr />
          <br />
        </div>
      </div>
    );
  });
};

export default Prueba;
