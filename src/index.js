import React from 'react';
import ReactDOM from 'react-dom';
import Clase from './Clase';
import Funciones from './Funciones';
import Holamundo from './HolaMundo';

/*
const elemento = document.createElement("h1");
elemento.innerText = "Hola Mundo";
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

ReactDOM.render(
  <p>
    <Holamundo/>
    <Funciones/>
    <Clase/>
  </p>
  ,
  
  document.getElementById('root')
);


