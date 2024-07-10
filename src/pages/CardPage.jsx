import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"
import { useContext } from "react"
import { ContadorContxt } from "../components/Contador"


const CardPage=()=>{
    const {aumenta} = useContext(ContadorContxt)
    const {disminuye} = useContext(ContadorContxt)

    //hacer un estado que guarde los libros
    const [libroInfo, setLibroInfo] = useState([])

    //función para traer el liro guardado en el local (hecho en lista libro)
    const libroGet = async()=>{
        const libroDatos = await getFilter("id", localStorage.getItem("libroLocal"))
        setLibroInfo(libroDatos)
    }
    useEffect(()=>{
        libroGet()
    },[])
   
    return(
        <>
        <Navbar/>
        <HamburgerMenu/>
        <h1>Book information</h1>
        <ListaLibros cardLibro={libroInfo} mostrarC={true} btnInfoL={libroGet} btnAgregarL={aumenta} btnQuitarL={disminuye}/>
        {/*que aparezcan los demás libros*/}
        
        <p>Reviews</p>


        </>
    )
}
export default CardPage