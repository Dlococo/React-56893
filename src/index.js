import React from 'react';
import ReactDOM from 'react-dom';
import Contacto from './Componentes/Contacto';
import Perfil from './Componentes/Perfil';

/*
const elemento = document.createElement("h1");
elemento.innerText = "Hola Mundo";
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/

ReactDOM.render(
  <React.StrictMode>
    <Contacto nombreContacto="Damian Lococo"></Contacto>
    <Perfil nombrePerfil="Damian" cargo="Docente" titulo="Ingeniero"></Perfil>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
