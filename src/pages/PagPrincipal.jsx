import Navbar from "../components/Navbar"
import CardBook from "../components/CardBook"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import HamburgerMenu from "../components/HamburgerMenu"
import InfoGeneral from "../components/InfoGeneral"


const PagPrincipal =()=>{

    const navigate = useNavigate()

  
    
    return(
        <>
        <Navbar />
        <div className="hamburgerMover">
        <HamburgerMenu/>
        </div>
        <h1>¡Welcome! Start to read now</h1>
        <select>
            <option>General</option>
            <option>Libros en inglés</option>
            <option>Libros universitarios</option>
        </select>

            <div className="d-flex flex-row gap-3 mt-5 mb-5">
            <p>Libros disponibles para venta</p>
            <Input tipo={"number"} valor={0}/>
            <p>Libros disponibles para intercambio</p>
            <Input tipo={"number"} valor={0}/>
            <p>Libros disponibles en ambas opciones</p>
            <Input tipo={"number"} valor={0}/>
            </div>
            <div className="d-flex flex-row gap-3 mt-5">
            <CardBook titulo={'La sombra del viento'} autor={'Carlos Ruiz Zafón'} cantidad={'4'} categoria={'general'} 
            estado={'intercambio'} subidopor={'angie23'} ubicacion={'Santa Ana'}/>
            <CardBook/>
            <CardBook/>
            </div>
            <InfoGeneral/>


        </>
    )
}
export default PagPrincipal
