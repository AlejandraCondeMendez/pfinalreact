const Opciones = ({clase}) => {
    return (
        <>
            <select className={clase}>
                <option>Categorías</option>
                <option>General</option>
                <option>Libros en inglés</option>
                <option>Libros universitarios</option>
            </select>
        </>
    )
}
export default Opciones