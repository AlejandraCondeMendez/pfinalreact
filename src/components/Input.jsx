/* eslint-disable react/prop-types */
const Input = ({tipo, nombre, refVali, cambio})=>{
    return(
        <>
        <input type={tipo} placeholder={nombre} ref={refVali} onChange={cambio}></input>
        </>
    )
}
export default Input