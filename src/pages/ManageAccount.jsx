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

    const [modalShow, setModalShow] = useState(false);
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    
    const [datosPrevios, setDatosPrevios] = useState('')//edición del libro
    const [libros, setLibros] = useState([])//los libros del usuario

    useEffect(()=>{
        const librosUser = async ()=>{
            const dataLibroUser = await getFilter("usuarioID", localStorage.getItem("localID")) //libros del usuario
            setLibros(dataLibroUser)
        }
        librosUser()
    },[libros])
    
    const deleteLibro = async(id) =>{
        const alerta = await acceptPopUp("Estás intentando eliminar un libro, ¿Continuar?", "El libro se eliminó con éxito", "La eliminación del libro fue cancelada");
   if (alerta) {
            await deleteData("libros", id);
        }
    }

    const actualizarLibro= async (id,titulo,autor,cantidad,direccion,estado,categoria)=>{
        let libroActualizado={
            id:id,
            titulo:titulo,
            autor:autor,
            cantidad:cantidad,
            tipo:categoria,
            estado:estado,
            direccion:direccion,
            usuarioID:localStorage.getItem("localID"),
            subidopor:localStorage.getItem("localUser")
        }
        await putData(libroActualizado,"libros")
        setModalShowUpdate(false) //OCULTAR EL MODAL
    }

    const recuperaDatosLibro = (id,titulo,autor,cantidad,direccion,estado,categoria)=>{ //propiedades del libro que queremos editar
        setDatosPrevios({id,titulo,autor,cantidad,direccion,estado,categoria})//y luego se lo actualizamos al estado
        setModalShowUpdate(true) //MOSTRAR EL MODAL
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
            <ModalLibro show={modalShow} onHide={() => setModalShow(false)}/>
            {datosPrevios && 
            <PutModal
            mostrar={modalShowUpdate}
            ocultar={()=>setModalShowUpdate(false)}
            id={datosPrevios.id}//accedemos a la propiedad del estado
            titulo={datosPrevios.titulo}
            autor={datosPrevios.autor}
            cantidad={datosPrevios.cantidad}
            ubicacion={datosPrevios.direccion}
            categoria={datosPrevios.categoria}
            estado={datosPrevios.estado}
            btnEditarM={actualizarLibro}
            />
        }
        <ListaLibros cardLibro={libros} btnEditarL={recuperaDatosLibro} btnEliminarL={deleteLibro} mostrarBotones={true}/>
        </>
    )
}
export default ManageAccount