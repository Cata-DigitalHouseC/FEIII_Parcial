//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

const Card = ({nombreUsuario,colorUsuario}) => {
  return (
    <div className="Card">
      <h1>Elige un color</h1>
      <h3>Nombre: {nombreUsuario} </h3>
      <h3>Color: {colorUsuario} </h3>
      {/* <input type="color" value = {colorUsuario}></input> */}
    </div>
  );
}

export default Card;
