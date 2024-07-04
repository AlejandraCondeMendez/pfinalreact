import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar"
import ListaLibros from "../components/ListaLibros"
import ModalLibro from "../components/ModalLibro";
import { useEffect } from "react";
import { deleteData, getFilter } from "../services/fetch";
import { acceptPopUp } from "../services/alertas";
import HamburgerMenu from "../components/HamburgerMenu"


const ManageAccount = () => { //CRUD
    const [modalShow, setModalShow] = useState(false);
    const [libros, setLibros] = useState([])

    useEffect(()=>{
        const librosUser = async ()=>{
            const dataLibroUser = await getFilter("usuarioID", localStorage.getItem("localID"))
            setLibros(dataLibroUser)
        }
        librosUser()
    },[libros])

    
    const deleteLibro = async(id) =>{
        const isConfirmed = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
   if (isConfirmed) {
            await deleteData("libros", id);
        }
    }
  


    return (
        <>
            <Navbar />
            <div className="hamburgerMover">
                <HamburgerMenu/>
            </div>
            <h1 className="titulo">My account</h1>

            <ListaLibros cardLibro={libros} btnEditar={""} btnEliminar={deleteLibro} mostrarBotones={true}/>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add a new book
            </Button>
            <ModalLibro
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default ManageAccount