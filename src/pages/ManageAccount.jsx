import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar"
import ListaLibros from "../components/ListaLibros"
import ModalLibro from "../components/ModalLibro";
import { useEffect } from "react";
import putData, { deleteData, getFilter } from "../services/fetch";
import { acceptPopUp } from "../services/alertas";
import HamburgerMenu from "../components/HamburgerMenu"
import PutModal from "../components/PutModal";


const ManageAccount = () => { //CRUD

    const [editarL, setEditarL] = useState(null)
    const [recarga,setRecarga]=useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [libros, setLibros] = useState([])

    useEffect(()=>{
        const librosUser = async ()=>{
            const dataLibroUser = await getFilter("usuarioID", localStorage.getItem("localID"))
            setLibros(dataLibroUser)
        }
        librosUser()
    },[recarga]) //CAMBIAR LUEGO
    
    const deleteLibro = async(id) =>{
        const isConfirmed = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
   if (isConfirmed) {
            await deleteData("libros", id);
        }
    }

    const recuperaDatosLibro = (id,titulo,autor,cantidad,direccion)=>{
        setEditarL({id,titulo,autor,cantidad,direccion})
        setModalShowUpdate(true)
    }

    const actualizarLibro=async(id,titulo,autor,cantidad,direccion)=>{
        let libroActualizado={
            id:id,
            titulo:titulo,
            autor:autor,
            cantidad:cantidad,
            direccion:direccion,
            usuarioID:localStorage.getItem("localID"),
            subidopor:localStorage.getItem("localUser")
        }
        await putData(libroActualizado,"libros")
        setModalShowUpdate(false)
    }


    return (
        <>
            <Navbar />
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="titulo">My account</h1>
            <p className="contadorCuenta">My books</p>

            <Button className="botonCuenta" variant="primary" onClick={() => setModalShow(true)}>
                Add a new book
            </Button>
            <ListaLibros cardLibro={libros} btnEditarL={recuperaDatosLibro} btnEliminarL={deleteLibro} mostrarBotones={true}/>
            <ModalLibro show={modalShow} onHide={() => setModalShow(false)}/>
            {editarL &&
            <PutModal
             mostrar={modalShowUpdate}
             ocultar={()=>setModalShowUpdate(false)}
             id={editarL.id}
             titulo={editarL.titulo}
             autor={editarL.autor}
             cantidad={editarL.cantidad}
             ubicacion={editarL.direccion}
             btnEditarM={actualizarLibro}
            />
            }
        </>
    )
}
export default ManageAccount