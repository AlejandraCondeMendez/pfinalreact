// eslint-disable-next-line react/prop-types
const inputPP = ({ tipo, nombre, refVali, cambio, valor, clase}) => {
    return (
        <>
        <input type={tipo} placeholder={nombre} ref={refVali} onChange={cambio} value={valor} className={clase}/>
        </>
    )
}
export default inputPP  