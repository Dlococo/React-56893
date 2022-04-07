import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Componentes/Formulario';

/*
const elemento = document.createElement("h1");
elemento.innerText = "Hola Mundo";
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

ReactDOM.render(
  <React.StrictMode>
    {/*<App/>**/}
    <Formulario/>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
