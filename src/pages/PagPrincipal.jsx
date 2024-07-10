import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import InputPP from "../components/InputPP"
import InfoGeneral from "../components/InfoGeneral"
import { useContext, useEffect, useState } from "react"
import { getData, getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"
import { ContadorContxt } from "../components/Contador"
import { useNavigate } from "react-router-dom"


const PagPrincipal = () => {
    
    const navigate=useNavigate()

    const {aumenta} = useContext(ContadorContxt)
    const {disminuye} = useContext(ContadorContxt)
    
    // estados de la cardbook-contadores (venta, intercambio y ambos)
    const [venta, setVenta] = useState(0)
    const [intercambio, setIntercambio] = useState(0)
    const [ambos, setAmbos] = useState(0)

    // cambio de categorias - tienen arreglos porque cada uno va a tener un conjunto de información distinto
    const [general, setGeneral] = useState([])
    const [uni, setUni] = useState([])
    const [ingles, setIngles] = useState([])

    //setBooks contiene todos loslibros que se encuentran en la API
    const [books, setBooks] = useState([])

    //selección de categorías (filtrar por general, universitarios, ingles)
    const [categoria, setCategoria] = useState("")//Categoría es un estado que cambia cada vez que el componente 
    //Opciones, cambie. Cuando este cambia, se actualiza el estado. Según el estado, se carga una u otra lista

    useEffect(() => {//tiene dos momentos de ejecucion: cuando se carga la página (ejecute la página) y cada vez que sus dependencias cambien
        const traeLibros = async () => {
            const getBooks = await getData("libros", "")
            setBooks(getBooks) // setBooks contiene todos los libros que estan en la API 
            console.log(getBooks);
        }

        const contadores = async () => { 
            const ventaLibro = await getFilter("estado", "Venta")
            const interLibro = await getFilter("estado", "Intercambio")
            const ambosLibro = await getFilter("estado", "Ambos")
            setVenta(ventaLibro.length)//cantidad de libros que hay en la API
            setIntercambio(interLibro.length)
            setAmbos(ambosLibro.length)
        }

        const categoriaLibros = async () => {
            const geneLibros = await getFilter("tipo", "General")
            const inglesLibros = await getFilter("tipo", "Libros en ingles")
            const uniLibros = await getFilter("tipo", "Libros universitarios")
            setGeneral(geneLibros)
            setIngles(inglesLibros)
            setUni(uniLibros)
        }
        traeLibros()
        contadores()
        categoriaLibros()
    }, [categoria])//cada que categoría cambie se ejecuta el useEffect

    return (
        <>
            <Navbar/>
            <div className="hamburgerMover">
                <HamburgerMenu />
            </div>
            <h1 className="text-center">¡Welcome! {localStorage.getItem("localUser")} <br /> Start to read now</h1> {/*si hay un usuario iniciado muestra el welcome con ese nombre sino solo muestra Welcome*/}
            
            <Opciones clase={"opciones"} evento={(e)=>setCategoria(e.target.value)} titulo={"Categorías de la biblioteca"} />
            
            <div className="divContador">
                <div className="pTitulo">
                <p className="inputLibro">Libros disponibles para venta</p>
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={venta} />
                </div>
                <p className="inputLibro">Libros disponibles para intercambio</p>
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={intercambio} />
                <p className="inputLibro">Libros disponibles en ambas opciones</p>
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={ambos} />
            </div>
            <div className="d-flex flex-row gap-3 mt-5 w-100 flex-wrap">
                {categoria === "" ? <ListaLibros  cardLibro={books} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage')}}/> : ""} {/*si general esta vacío mostrar todos los libros (books) mostrarC viene del cardBook y si esta en verdadero los botones se mostraran (borrar y editar)*/}
                {categoria === "Libros en ingles" ? <ListaLibros cardLibro={ingles} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye}  /> : ""}
                {categoria === "Libros universitarios" ? <ListaLibros cardLibro={uni}  mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye}/> : ""}
                {categoria === "General" ? <ListaLibros cardLibro={general} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} /> : ""}
            </div>
            <InfoGeneral />
        </>
    )
}
export default PagPrincipal
