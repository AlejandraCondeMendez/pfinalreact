import Boton from "./Boton"
import Input from "./Input"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData } from "../metodos"


const InicioSesion =()=>{
    
    const [datos, setDatos] = useState([]) //LO QUE VAMOS A GUARDAR ES UN ARREGLO DE USUARIOS
    const navigate = useNavigate()
    const userInicio = useRef('')
    const passInicio = useRef('')

    useEffect (()=>{
        const usersGet = async ()=>{
            const listaUsuarios = await getData("usuarios","")
            setDatos(listaUsuarios)
        }
        usersGet()
    },[]) 

    const validarInput =()=>{
        const userI = userInicio.current.value.trim('')
        const passI = passInicio.current.value.trim('')
        if (!userI && !passI) {
            alert ("Por favor llene los campos vacíos")
            return
        } 
        if(datos.find(usuarios=>userI===usuarios.nombre && passI===usuarios.clave)){
            irPagPrinci()
        }
        // datos.forEach(usuarios=>{
        //     if (userI === usuarios.nombre && passI === usuarios.clave) {
        //         irPagPrinci()
        //     }
        // })
    }
    const irCreate =()=>{
        navigate("/")
    }

    const irPagPrinci=()=>{
        navigate("/paginaprincipal")
    }


    return(

        <>
        <h1>Welcome to</h1>
        <Input tipo={"text"} nombre={"usuario"} refVali={userInicio}/>
        <Input tipo={"password"} nombre={"password"} refVali={passInicio}/>
        <Boton tipo={"button"} nombre={"Log in"} evento={validarInput}/>

        <a onClick={irCreate}>Creat an account</a>
        </>
    )
}
export default InicioSesion