import React, {Component} from "react";

const imagen="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg";

export default class Perfil extends Component{

    render(){
        return (
            <div>
                <img src={imagen} width="100" height="100"></img>
                <h1>{this.props.nombrePerfil}</h1>
                <p>{this.props.cargo}</p>
                <p>{this.props.titulo}</p>
            </div>
        )
    }

}

