import Boton from "../components/Boton"
import Input from "../components/Input"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData, postData } from "../services/fetch"
import HamburgerMenu from "../components/HamburgerMenu"
import { muestraAlerta } from "../services/alertas"
import Navbar from "../components/Navbar"


const CrearCuenta = () => { //useState en los imputs para poder obtener lo que esta escrito de una fomra actualizada (para tener el input de una forma actualizada cada vez que se escribe (alejandra23-cada letra se actualiza)
    const [nombre, setNombre] = useState()
    const [contra, setContra] = useState()
    const [correo, setCorreo] = useState()
    const [numero, setNumero] = useState()
    const navigate = useNavigate() //navegar entre rutas
    const userReg = useRef('') //validar vacío del input
    const passReg = useRef('')
    const correoReg = useRef('')
    const numReg = useRef('')

    const validarInputR = async () => {
        const userTrim=userReg.current.value.trim()
        const passTrim=userReg.current.value.trim()
        const correoTrim=userReg.current.value.trim()
        const numTrim=numReg.current.value.trim()
        if (!userTrim || !passTrim || !correoTrim || !numTrim) {
            muestraAlerta("Por favor llene los campos vacíos", "error")
            return
        }
        let cuenta = {
            nombre: nombre,
            clave: contra,
            correo: correo,
            numero: numero
        }
        let datos = await getData("usuarios", "") //ocupamos todos los datos del endpoint usuarios
        if (datos.find(usuarios => nombre === usuarios.nombre && correo === usuarios.correo && numero === usuarios.numero)) { //find va abuscar dentro de datos y va a iterar (nombre viene del estado-input y usuarios.nombre es de la API)
            muestraAlerta("Usuario ya existe", "error")
            return
        } else {
            await postCuenta(cuenta, "usuarios")
            setNombre("")
            setContra("")
            setNumero("")
            setCorreo("")
        } //objeto y endpoint
    }

    //Navegaciones entre páginas

    const irInicio = () => {
        navigate("/iniciarsesion")
    }

    const postCuenta = async (obj, endpoint) => {
        muestraAlerta("Cuenta registrada", "success")
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
                <Input tipo={"password"} nombre={"password"} refVali={passReg} valor={contra} cambio={(e) => setContra(e.target.value)} signo={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>}/>
                <span>Email</span>
                <Input tipo={"email"} nombre={"email adress"} refVali={correoReg} valor={correo} cambio={(e)=>setCorreo(e.target.value)} signo={<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>}/>
                <span>Phone number</span>
                <Input tipo={"number"} nombre={"number"} refVali={numReg} valor={numero} cambio={(e)=>setNumero(e.target.value)} signo={<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>}/>
                <Boton className={"botoncito2 btn btn-info"} tipo={"button"} nombre={"Register"} evento={validarInputR} />
                <a className="textcreate2 text-underline" onClick={irInicio}>Log in</a>
            </div>
        </>
    )
}
export default CrearCuenta