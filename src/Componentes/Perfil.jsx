import React, {Component} from "react";

const imagen="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg";

const Perfilcss = {
    boxShadow : "0 4px 0 blue",
    position: "relative",
    margin: "2rem",
    textAlign: "center",
    width: "33%", 
    float: "left",
    height: "5rm",
    perpective: "150rem "
}

const botonCSSVerde = {
    backgroundColor: "#4CAF50", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  }

  const botonCSSBlue = {
    backgroundColor: "blue", /* Blue */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  }

export default class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombrePerfil: this.props.nombrePerfil,
            cargo: this.props.cargo,
            titulo: this.props.titulo,
            mostrarCargo: true,
        }
    }

    CambiarEstado = () => {
        console.log("Cambiando");

        this.setState({
            mostrarCargo: !this.state.mostrarCargo,
            parrafo: this.state.mostrarCargo ? this.state.cargo : this.state.titulo,
        });

        //this.state.mostrarCargo ? this.setState({mostrarCargo : false}) : this.setState({mostrarCargo : true});
    }

    render(){
        return (
            <div style={Perfilcss}>
                <img src={imagen} width="100" height="100"></img>
                <h1>{this.state.nombrePerfil}</h1>
                <p style={ {color: "gray", fontFamily: "arial", fontSize: "26px" }}>{this.state.mostrarCargo ? this.state.cargo : this.state.titulo}</p>
                <br/>
                <button style={this.state.mostrarCargo ? botonCSSVerde : botonCSSBlue} onClick={this.CambiarEstado}>Mostrar { this.state.mostrarCargo ? "Titulo" : "Cargo" }</button>
            </div>
        )
    }
}

