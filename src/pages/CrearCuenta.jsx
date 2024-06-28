import Boton from "../components/Boton"
import Input from "../components/Input"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData } from "../services/fetch"


const CrearCuenta=()=>{ //useState en los imputs para poder obtener lo que esta escrito de una fomra actualizada (para tener el input de una forma actualizada cada vez que se escribe (alejandra23-cada letra se actualiza)
    const [nombre,setNombre]=useState()
    const [contra,setContra]=useState()
    const navigate = useNavigate() //navegar entre rutas
    const userReg = useRef('') //validar vacío del input
    const passReg = useRef('')

    const validarInputR=async()=>{
        if (!userReg.current.value && !passReg.current.value) {
            alert ("Por favor llene los campos vacíos")
            return
        } 
        let cuenta = {
            nombre: nombre,
            clave: contra
        }
        await postCuenta(cuenta,"usuarios") 
    }
    const irInicio=()=>{
        navigate ("/iniciarsesion")
    }

    const postCuenta = async (obj,endpoint) => {
        alert("cuenta registrada")
        await postData(obj,endpoint)
        }

    return(
        <>
        <h1>Creat an account</h1>
        <span>Create an username</span>
        <Input tipo={"text"} nombre={"username"} refVali={userReg} valor={nombre} cambio={(e)=>setNombre(e.target.value)}/>
        <span>Create a password</span>
        <Input tipo={"password"} nombre={"password"} refVali={userReg} valor={contra} cambio={(e)=>setContra(e.target.value)}/>
        <Boton tipo={"button"} nombre={"Register"} evento={validarInputR}/>
        <a onClick={irInicio}>Iniciar sesión</a>
        </>
    )
}
export default CrearCuenta