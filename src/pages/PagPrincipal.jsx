import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import InputPP from "../components/InputPP"
import InfoGeneral from "../components/InfoGeneral"
import { useEffect, useState } from "react"
import { getData, getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"


const PagPrincipal = () => {
    //estados de la cardbook (venta, intercambio y ambos)
    const [venta, setVenta] = useState(0)
    const [intercambio, setIntercambio] = useState(0)
    const [ambos, setAmbos] = useState(0)
    //cambio de categorias
    const [general, setGeneral] =useState('')
    const [uni, setUni] =useState('')
    const [ingles, setIngles] =useState('')

    const [books, setBooks] = useState([])
    useEffect(()=>{
        const traeLibros = async ()=>{
            const getBooks = await getData("libros", "")
            setBooks(getBooks) //setBooks contiene todos los libros que estan en la API 
            console.log(getBooks);
        }
        const contadores = async()=>{
            const ventaLibro = await getFilter("estado", "Venta")
            const interLibro = await getFilter("estado", "Intercambio")
            const ambosLibro = await getFilter("estado", "Ambos")
            setVenta(ventaLibro.length)
            setIntercambio(interLibro.length)
            setAmbos(ambosLibro.length)
        }
        const categoriaLibros =async()=>{
            const geneLibros = await getFilter("tipo", "General")
            const inglesLibros = await getFilter("tipo", "Libros en ingles")
            const uniLibros = await getFilter("tipo", "Libros universitarios")

            setGeneral(geneLibros.length)
            setIngles(inglesLibros.length)
            setUni(uniLibros.length)
        }
        traeLibros()
        contadores()
        categoriaLibros()
    },[])
    
    return (
        <>
            <Navbar />
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="text-center">¡Welcome! {localStorage.getItem("localUser")} Start to read now</h1>

            <Opciones clase={"opciones"} titulo={"Categorías de la biblioteca"}/>
            

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
            <ListaLibros cardLibro={books} mostrarC={true}/> {/*recordar: mostrarC viene del cardbook*/}
            </div>

            <InfoGeneral/>

        </>
    )
}
export default PagPrincipal



{/*
const PagPrincipal = () => {

    const [books, setBooks] = useState([])
    const [ventas, setVentas] = useState(0)
    const [intercambios, setIntercambios] = useState(0)
    const [ambos, setAmbos] = useState(0)
    const [aumentaCarrito, setAumenta] = useState(0)

    const aumenta = ()=>{
        setAumenta(aumentaCarrito+1)
    }

    useEffect(()=>{
        const traeLibros = async ()=>{
            const getBooks = await getData("libros", "")
            setBooks(getBooks)
            console.log(getBooks);
        }
        const contadores = async ()=>{
            const ventas = await getFiltrado("estado","Venta")
            const intercambio = await getFiltrado("estado","Intercambio")
            const ambos = await getFiltrado("estado","Ambos")
            setVentas(ventas.length)
            setIntercambios(intercambio.length)
            setAmbos(ambos.length)
        }
        traeLibros()
        contadores()
    },[])
return (
        <>
            <Navbar contador={aumentaCarrito}/>
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="text-center">¡Welcome! {localStorage.getItem("localUser")} Start to read now</h1>
            <Opciones clase={"opciones"} titulo={"Categorías de la biblioteca"}/>

            <div className="divContador">
                <div className="pTitulo">
                <p className="inputLibro">Libros disponibles para venta</p> 
                <InputPP valor={ventas} clase={"contadorIn input-circular"} tipo={"number"} />
                </div>
                <p className="inputLibro">Libros disponibles para intercambio</p>
                <InputPP valor={intercambios} clase={"contadorIn input-circular"} tipo={"number"}  />
                <p className="inputLibro">Libros disponibles en ambas opciones</p>
                <InputPP valor={ambos} clase={"contadorIn input-circular"} tipo={"number"}  />

            </div>
            <div className="d-flex flex-row gap-3 mt-5 w-100 flex-wrap">
            <ListaLibros cardLibro={books} mostrarC={true} btnAgregar={aumenta}/>
            </div>

            <InfoGeneral/>

        </>
    )
}
export default PagPrincipal */}