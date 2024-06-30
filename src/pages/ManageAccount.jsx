import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from "../components/Navbar"
import ListaLibros from "../components/ListaLibros"
import ModalLibro from "../components/ModalLibro";

const ManageAccount = () => { //CRUD
    const [modalShow, setModalShow] = useState(false);
    const [libros, setLibros] = useState([])


    return (
        <>
            <Navbar />
            <h1>My account</h1>
            <ListaLibros cardLibro={libros} />
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