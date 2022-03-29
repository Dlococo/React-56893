//import imagen from '../scripts/constantes'
import ImgPerfil from '../recursos/imagenes/minion.jpeg'
import '../recursos/css/contacto.css'

const imagen="https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg";

function Contacto(props){ //Parametros en una funcion

    
    return (
        <div className='contacto'>
            <img src={ImgPerfil} width="100" height="100"></img>
            Nombre del contacto {props.nombreContacto}
        </div>
    )
}

export default Contacto;