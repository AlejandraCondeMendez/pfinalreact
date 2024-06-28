/* eslint-disable react/prop-types */
const Input = ({tipo, nombre, refVali, cambio, valor})=>{
    return(
        <>
        <input type={tipo} placeholder={nombre} ref={refVali} onChange={cambio} value={valor}></input>
        </>
    )
}
export default Input