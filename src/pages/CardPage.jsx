import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"
import { useContext } from "react"
import { ContadorContxt } from "../components/Contador"
import Carrusel from "../components/Carrusel" 
import { getData } from "../services/fetch"
import { useNavigate } from "react-router-dom"
import FormCardPage from "../components/FormCardPage"
import { muestraAlerta } from "../services/alertas"


const CardPage=()=>{
    
    const [userLibro, setUserLibro] = useState('')
    const [infoLibro, setInfoLibro] = useState([])
    const [books, setBooks] = useState([])
    const navigate=useNavigate()
    const idLocal = localStorage.getItem("libroLocal")
    
    useEffect(() => {//tiene dos momentos de ejecucion: cuando se carga la página (ejecute la página) y cada vez que sus dependencias cambien
        const traeLibros = async () => {
            const getBooks = await getData("libros", "")
            setBooks(getBooks) // setBooks contiene todos los libros que estan en la API 
        }
        traeLibros()
    }, [])//cada que categoría cambie se ejecuta el useEffect


    const {aumenta} = useContext(ContadorContxt)
    const {disminuye} = useContext(ContadorContxt)

    //hacer un estado que guarde los libros
    const [libroInfo, setLibroInfo] = useState([])

    //función para traer el liro guardado en el local (hecho en lista libro)
    const libroGet = async()=>{ //Se le agrega dependencias para que cada vez que el id del libro (guardado en el localStorage) cambie se cambie el libro del que se desea más información
        const libroDatos = await getFilter("id", idLocal)
        setLibroInfo(libroDatos)
        setUserLibro(libroDatos[0].usuarioID) /*el get filter trae el libro según su id (todas sus propiedades
            setUserLibro accede a la propiedad de la API usuarioID para poder tener al dueño del libro*/
    }

    const dueñoLibro = async()=>{
        const datos = await getData("usuarios", userLibro)
        setInfoLibro(datos)
    }
    
    useEffect(()=>{
        libroGet()
        dueñoLibro()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[idLocal, userLibro])
   
    const solicitarInfo =()=>{
        muestraAlerta("Tu solicitud fue enviada", "success")
    }

    return(
        <>
        <Navbar/>
        <HamburgerMenu/>
        <h1 className="titulo">Información del libro</h1>
        <div className="cardPage">
        <ListaLibros cardLibro={libroInfo} mostrarC={true} btnInfoL={libroGet} btnAgregarL={aumenta} btnQuitarL={disminuye}/>
        </div>
        {/*que aparezcan los demás libros*/}
        <div className="formCardPage">
        <FormCardPage number={infoLibro.numero} email={infoLibro.correo} evento={solicitarInfo}/>
        </div>
        <div className="carrusel">
        <Carrusel cardLibro={books} mostrarC={true} btnAgregarL={aumenta} btnQuitarL={disminuye} btnInfoL={()=>{navigate('/cardpage'),window.scrollTo({
            top:0,
            behavior: 'smooth'
        })}} />
        </div>
        </>

    )
}
export default CardPage