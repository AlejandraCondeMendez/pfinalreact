import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import InputPP from "../components/InputPP"
import HamburgerMenu from "../components/HamburgerMenu"
import InfoGeneral from "../components/InfoGeneral"
import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"


const PagPrincipal = () => {

    const [books, setBooks] = useState([])
    useEffect(()=>{
        const traeLibros = async ()=>{
            const getBooks = await getData("libros", "")
            setBooks(getBooks)
            console.log(getBooks);
        }
        traeLibros()
    },[])
    
    return (
        <>
            <Navbar/>
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="text-center">¡Welcome! Start to read now</h1>
            <Opciones titulo={"Categorías de la biblioteca"}/>

            <div className="d-flex flex-row gap-3 mt-5 mb-5">
                <p>Libros disponibles para venta</p>
                <InputPP tipo={"number"} valor={0} />
                <p>Libros disponibles para intercambio</p>
                <InputPP tipo={"number"} valor={0} />
                <p>Libros disponibles en ambas opciones</p>
                <InputPP tipo={"number"} valor={0} />

            </div>
            <div className="d-flex flex-row gap-3 mt-5 w-100 flex-wrap">
            <ListaLibros cardLibro={books}/>
            </div>

            <InfoGeneral/>

        </>
    )
}
export default PagPrincipal
