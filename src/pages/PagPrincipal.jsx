import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import { useContext, useEffect, useState } from "react"
import { getData, getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"
import { ContadorContxt } from "../components/Contador"
import { useNavigate } from "react-router-dom"
import InformGeneral from "../components/InformGeneral"

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
            <h2 className="text-center"><strong>LibertyBook</strong></h2> <br />
            <h1 className="text-center">¡Bienvenido! {localStorage.getItem("localUser")} <br /> Empieza a leer ahora</h1> {/*si hay un usuario iniciado muestra el welcome con ese nombre sino solo muestra Welcome*/}
            
            <div className="filtroOpciones">
            <Opciones clase={"opciones"} evento={(e)=>setCategoria(e.target.value)} titulo={"Categorías de la biblioteca"} />
            </div>
                <div className="contaDispo">
                <p className="inputLibro">Libros disponibles <br /> para venta</p>
                <p className="valorVenta">{venta}</p>     
                </div>
                <div className="contaInter">
                <p className="inputLibro">Libros disponibles <br /> para intercambio</p>
                <p className="valorInter">{intercambio}</p>
                </div>
                <div className="contaAmbos">
                <p className="inputLibro">Libros disponibles en <br /> ambas opciones</p>
                <p className="valorAmbos">{ambos}</p>
                </div>
            <div className="cardPP d-flex flex-row gap-3 mt-5 w-100 flex-wrap">
                {categoria === "" ? <ListaLibros  cardLibro={books} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage')}}/> : ""} {/*si general esta vacío mostrar todos los libros (books) mostrarC viene del cardBook y si esta en verdadero los botones se mostraran (borrar y editar)*/}
                {categoria === "Libros en ingles" ? <ListaLibros cardLibro={ingles} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage')}} /> : ""}
                {categoria === "Libros universitarios" ? <ListaLibros cardLibro={uni}  mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage')}}/> : ""}
                {categoria === "General" ? <ListaLibros cardLibro={general} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage')}}/> : ""}
            </div>
            <InformGeneral/>
            
        </>
    )
}
export default PagPrincipal
