/* eslint-disable react/prop-types */
const Input = ({tipo, nombre, refVali, cambio, valor, clase})=>{
    return(
        <>
        <input type={tipo} placeholder={nombre} ref={refVali} onChange={cambio} value={valor} className={clase}></input>
        </>
    )
}
export default Input