import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import InputPP from "../components/InputPP"
import InfoGeneral from "../components/InfoGeneral"
import { useEffect, useState } from "react"
import { getData } from "../services/fetch"
import ListaLibros from "../components/ListaLibros"
import HamburgerMenu from "../components/HamburgerMenu"


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
            <Navbar />
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="text-center">¡Welcome! Start to read now</h1>
            <Opciones clase={"opciones"} titulo={"Categorías de la biblioteca"}/>

            <div className="divContador">
                <div className="pTitulo">
                <p className="inputLibro">Libros disponibles para venta</p> 
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={0} />
                </div>
                <p className="inputLibro">Libros disponibles para intercambio</p>
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={0} />
                <p className="inputLibro">Libros disponibles en ambas opciones</p>
                <InputPP clase={"contadorIn input-circular"} tipo={"number"} valor={0} />

            </div>
            <div className="d-flex flex-row gap-3 mt-5 w-100 flex-wrap">
            <ListaLibros cardLibro={books} mostrarC={true}/>
            </div>

            <InfoGeneral/>

        </>
    )
}
export default PagPrincipal
