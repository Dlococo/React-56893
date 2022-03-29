
function Imagen(){
    return(
        <div>
            <img src='https://definicion.de/wp-content/uploads/2019/06/perfildeusuario.jpg'/>
        </div>
    );
}

const parrafo = () => <p>Parrafor</p>


export default function Funciones(){
    return (
        <div>
            <h1>Titulo</h1>
            <parrafo/>
            <Imagen/>
        </div>
    );
}
