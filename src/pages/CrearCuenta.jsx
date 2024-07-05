import Boton from "../components/Boton"
import Input from "../components/Input"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData, postData } from "../services/fetch"
import Navbar from "../components/Navbar"
import HamburgerMenu from "../components/HamburgerMenu"


const CrearCuenta = () => { //useState en los imputs para poder obtener lo que esta escrito de una fomra actualizada (para tener el input de una forma actualizada cada vez que se escribe (alejandra23-cada letra se actualiza)
    const [nombre, setNombre] = useState()
    const [contra, setContra] = useState()
    const navigate = useNavigate() //navegar entre rutas
    const userReg = useRef('') //validar vacío del input
    const passReg = useRef('')

    const validarInputR = async () => {
        if (!userReg.current.value && !passReg.current.value) {
            alert("Por favor llene los campos vacíos")
            return
        }
        let cuenta = {
            nombre: nombre,
            clave: contra
        }
        let datos = await getData("usuarios", "") //ocupamos todos los datos del endpoint usuarios
        if (datos.find(usuarios => nombre === usuarios.nombre)) { //find va abuscar dentro de datos y va a iterar (nombre viene del estado-input y usuarios.nombre es de la API)
            alert("usuario ya existe")
            return
        } else {
            await postCuenta(cuenta, "usuarios")
        } //objeto y endpoint
    }

    //Navegaciones entre páginas

    const irInicio = () => {
        navigate("/iniciarsesion")
    }

    const postCuenta = async (obj, endpoint) => {
        alert("cuenta registrada")
        await postData(obj, endpoint)
    }

    return (
        <>
            <Navbar/>
            <HamburgerMenu/>
            <h1 className="titulo">Sign in</h1>
            <div className="divInputs d-flex flex-column">
                <span>Create an username</span>
                <Input tipo={"text"} nombre={"username"} refVali={userReg} valor={nombre} cambio={(e) => setNombre(e.target.value)} signo={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>} />
                <span>Create a password</span>
                <Input tipo={"password"} nombre={"password"} refVali={userReg} valor={contra} cambio={(e) => setContra(e.target.value)} signo={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>} />
                <Boton className={"botoncito2 btn btn-info"} tipo={"button"} nombre={"Register"} evento={validarInputR} />
                <a className="textcreate2 text-underline" onClick={irInicio}>Log in</a>
            </div>
        </>
    )
}
export default CrearCuenta