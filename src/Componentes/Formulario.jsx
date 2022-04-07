import React, { Component } from "react";

export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombre : "",
            correo : ""
        }
    }

    /*AsignarValores1 = (propiedad, valor) => {
        let estado = {};
        estado[propiedad] = valor;
        this.setState(estado);
    }*/

    AsignarValoresFormulario = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    EnviarFormulario = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.limpiarValoresFormulario();
    }

    limpiarValoresFormulario = () => {
        this.setState = ({
            nombre : "",
            correo : ""
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.EnviarFormulario}>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="nombre"
                        value={this.state.nombre}
                        onChange={this.AsignarValoresFormulario}
                        required={true}/>

                    <input 
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="correo"
                        value={this.state.correo}
                        onChange={this.AsignarValoresFormulario}
                        required={true}/>

                    <button type='submit'>Enviar Formulario</button>
                    <button type='reset' onClick={this.limpiarValoresFormulario}>Limpiar Formulario</button>
                </form>
            </div>
        )
    }
}
