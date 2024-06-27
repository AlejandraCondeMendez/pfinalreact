import Boton from "./Boton"
import Input from "./Input"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"


const InicioSesion =()=>{
    const navigate = useNavigate()

    const userInicio = useRef('')
    const passInicio = useRef('')
    const validarInput =()=>{
        const userI = userInicio.current.value.trim('')
        const passI = passInicio.current.value.trim('')
        if (!userI && !passI) {
            alert ("Por favor llene los campos vacíos")
            return
        }
    }

    const irCreate =()=>{
        navigate("/")
    }


    return(

        <>
        <h1>Welcome to</h1>
        <Input tipo={"text"} nombre={"usuario"} refVali={userInicio}/>
        <Input tipo={"text"} nombre={"password"} refVali={passInicio}/>
        <Boton tipo={"button"} nombre={"Log in"} evento={validarInput}/>

        <a onClick={irCreate}>Creat an account</a>
        </>
    )
}
export default InicioSesion