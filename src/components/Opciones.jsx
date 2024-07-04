/* eslint-disable react/prop-types */
const Opciones = ({clase, titulo,valor}) => {
    return (
        <>
            <select className={clase} onChange={valor}>
                <option>{titulo}</option>
                <option value={"General"}>General</option>
                <option value={"Libros en inglés"}>Libros en inglés</option>
                <option value={"Libros universitarios"}>Libros universitarios</option>
            </select>
        </>
    )
}
export default Opciones