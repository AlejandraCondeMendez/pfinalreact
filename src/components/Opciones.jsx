/* eslint-disable react/prop-types */


const Opciones = ({clase, titulo,evento}) => {
    return (
        <>
            <select className={clase} onChange={evento}>
                <option selected disabled>{titulo}</option>
                <option  value={""}>Todos</option>
                <option value={"General"}>General</option>
                <option value={"Libros en ingles"}>Libros en inglés</option>
                <option value={"Libros universitarios"}>Libros universitarios</option>
            </select>
        </>
    )
}
export default Opciones