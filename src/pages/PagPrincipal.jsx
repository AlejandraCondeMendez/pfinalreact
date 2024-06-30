import CardBook from "../components/CardBook"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import 

const PagPrincipal =()=>{

    const navigate = useNavigate()

    const irInicio = ()=>{
        navigate("/")
    }
    
    return(
        <>
        <nav>
            <ul>
                <li>Page information</li>
                <li onClick={irInicio} >Log out</li>
            </ul>
        </nav>
        <h1>¡Welcome! Start to read now</h1>
        <select>
            <option>General</option>
            <option>Libros en inglés</option>
            <option>Libros universitarios</option>
        </select>
            <p>Libros disponibles para venta</p>
            <Input tipo={"number"} valor={0}/>
            <p>Libros disponibles para intercambio</p>
            <Input tipo={"number"} valor={0}/>
            <p>Libros disponibles en ambas opciones</p>
            <Input tipo={"number"} valor={0}/>

            <CardBook/>    


        </>
    )
}
export default PagPrincipal
