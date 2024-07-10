import Boton from "../components/Boton"
import Input from "../components/Input"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData } from "../services/fetch"
import { muestraAlerta } from "../services/alertas"
import HamburgerMenu from "../components/HamburgerMenu"
import Navbar from "../components/Navbar"
const InicioSesion = () => {

    const [datos, setDatos] = useState([]) //LO QUE VAMOS A GUARDAR ES UN ARREGLO DE USUARIOS
    const navigate = useNavigate()
    const userInicio = useRef('')
    const passInicio = useRef('')

    useEffect(() => {
        const usersGet = async () => {
            const listaUsuarios = await getData("usuarios", "")
            setDatos(listaUsuarios)
        }
        usersGet()
    }, [])

    const validarInput = () => {
        const userI = userInicio.current.value.trim('')
        const passI = passInicio.current.value.trim('')
        if (!userI && !passI) {
            muestraAlerta("Porfavor llene los campos", "error")
            return
        }
        const valiUsuarios = datos.find(usuarios => userI === usuarios.nombre && passI === usuarios.clave)
        if (valiUsuarios) {
            localStorage.setItem("localID", valiUsuarios.id)//es para tener el ID sel usuario que ha iniciado sesión (insertar)
            localStorage.setItem("localUser", valiUsuarios.nombre)//id y usuarios vienen de la API
            irPagPrinci()
            return
        } else{
            muestraAlerta("Usuario no existe","error")
        }

    }
    const irCreate = () => {
        navigate("/crearcuenta")
    }

    const irPagPrinci = () => {
        navigate("/paginaprincipal")
    }


    return (

        <>
        <Navbar/>
        <HamburgerMenu/>
            <h1 className="titulo">Log in</h1>
      
            <div className="divInputs d-flex flex-column">
                
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="libroIcon bi bi-book" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
            </div>
                <Input clase={"inputLogin"} tipo={"text"} nombre={"usuario"} refVali={userInicio} signo={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>} />

                <Input clase={"inputLogin"} tipo={"password"} nombre={"password"} refVali={passInicio} signo={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                </svg>} />

                <Boton className={"botoncito btn btn-success"} tipo={"button"} nombre={"Log in"} evento={validarInput} />
                <a className="textcreate text-underline" onClick={irCreate}>Create an account</a>

            </div>

        </>
    )
}
export default InicioSesion