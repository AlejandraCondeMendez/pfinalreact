import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar"
import ListaLibros from "../components/ListaLibros"
import ModalLibro from "../components/ModalLibro";
import { useEffect } from "react";
import { getDataUser } from "../services/fetch";
import { deleteData } from "../services/fetch";

const ManageAccount = () => { //CRUD
    const [modalShow, setModalShow] = useState(false);
    const [libros, setLibros] = useState([])

    useEffect(()=>{
        const librosUser = async ()=>{
            const dataLibroUser = await getDataUser(localStorage.getItem("localID"))
            setLibros(dataLibroUser)
        }
        librosUser()
    },[])
    
        const deleteLibro = async(id) =>{
            await deleteData("libros",id)
            
        }
    
    return (
        <>
            <Navbar />
            <h1>My account</h1>

            <ListaLibros cardLibro={libros} btnEditar={""} btnEliminar={deleteLibro()} />

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