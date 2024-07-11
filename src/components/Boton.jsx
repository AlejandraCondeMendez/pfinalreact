/* eslint-disable react/prop-types */
const Boton=({evento, nombre, tipo,className})=>{
    return(
        <>
        <button className={className} type={tipo} onClick={evento}>{nombre}</button>
        </>
    )
}
export default Boton