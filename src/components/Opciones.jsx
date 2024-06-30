/* eslint-disable react/prop-types */
const Opciones = ({clase, titulo}) => {
    return (
        <>
            <select className={clase}>
                <option>{titulo}</option>
                <option>General</option>
                <option>Libros en inglés</option>
                <option>Libros universitarios</option>
            </select>
        </>
    )
}
export default Opciones