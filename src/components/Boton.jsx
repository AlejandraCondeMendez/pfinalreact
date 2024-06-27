/* eslint-disable react/prop-types */
const Boton=({evento, nombre, tipo})=>{
    return(
        <>
        <button type={tipo} onClick={evento}>{nombre}</button>
        </>
    )
}
export default Boton