import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar"
import ListaLibros from "../components/ListaLibros"
import ModalLibro from "../components/ModalLibro";
import { useEffect } from "react";
import { getDataUser } from "../services/fetch";
import { deleteData } from "../services/fetch";
import { acceptPopUp } from "../services/alertas";

const ManageAccount = () => { //CRUD
    const [modalShow, setModalShow] = useState(false);
    const [libros, setLibros] = useState([])
    const [recargar, setRecargar] = useState(false)

    useEffect(()=>{
        const librosUser = async ()=>{
            const dataLibroUser = await getDataUser(localStorage.getItem("localID"))
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
    //DE MOMENTO
    const recargaPag =()=>{
        setRecargar(!recargar)
    }

    return (
        <>
            <Navbar />
            <h1>My account</h1>

            <ListaLibros cardLibro={libros} btnEditar={""} btnEliminar={deleteLibro} />

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Add a new book
            </Button>
            <ModalLibro
                show={modalShow}
                onHide={() => setModalShow(false)}
                recargar={recargaPag}
            />
        </>
    )
}
export default ManageAccount