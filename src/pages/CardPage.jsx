import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { getFilter } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"

const CardPage=()=>{
    const [traerLibro, setTraerLibro] = useState([])
   
    const libroEspe = async ()=>{
        const datosLibro = await getFilter("id",localStorage.getItem("idLibro"))
        setTraerLibro(datosLibro)
    }
    useEffect(()=>{
        libroEspe()
    },[])
  
    return(
        <>
        <Navbar/>
        <HamburgerMenu/>
        <h1>Book information</h1>
        <ListaLibros cardLibro={traerLibro} mostrarC={true}/>
      
        {/*que aparezcan los demás libros*/}
        
        <p>Reviews</p>


        </>
    )
}
export default CardPage