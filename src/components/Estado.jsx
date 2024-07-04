/* eslint-disable react/prop-types */
const Estado = ({clase,valor}) => {
    return (
        <>
            <select className={clase} onChange={valor}>
                <option disabled value={""} selected>Opciones</option>
                <option>Venta</option>
                <option>Intercambio</option>
                <option>Ambos</option>
            </select>
        </>
    )
}
export default Estado