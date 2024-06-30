/* eslint-disable react/prop-types */
const Estado = ({clase}) => {
    return (
        <>
            <select className={clase}>
                <option>Opciones</option>
                <option>Venta</option>
                <option>Intercambio</option>
                <option>Ambos</option>
            </select>
        </>
    )
}
export default Estado