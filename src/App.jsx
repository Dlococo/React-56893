import React from "react";
import Perfil from "./Componentes/Perfil";
import perfilesJSON from "./recursos/archivos/perfiles.json"

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            perfiles : perfilesJSON
        }
    }

    // antes de cargar 
    // JS -> Programacion Funcional filter, map y reduce
    // despues de cargar 
    render (){
        return(
            <div>
                {
                    this.state.perfiles.map( (e) => 
                        <Perfil nombrePerfil={e.nombrePerfil} cargo={e.cargo} titulo={e.titulo}></Perfil>
                    )
                }
            </div>
        );
    }
}