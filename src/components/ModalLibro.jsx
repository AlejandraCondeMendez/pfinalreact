import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from './Input';
import Opciones from './Opciones';
import Estado from './Estado';

const ModalLibro =(props)=>{
    
    return(
        <>
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My books
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Book's information</h4>
        <div className='d-flex flex-column mx-auto justify-content-center align-items-center'>
        <Input tipo={"text"} nombre={"Titulo"} clase={"w-25 mb-3 p-1"}/>
        <Input tipo={"text"} nombre={"Autor"} clase={"w-25 mb-3 p-1"}/>
        <Input tipo={"text"} nombre={"Disponile"} clase={"w-25 mb-3 p-1"}/>
        <Estado clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"}/>
        <Opciones clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} />
        <Input tipo={"text"} nombre={"Ubicación"} clase={"w-25 mb-3 p-1"}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Send information</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}
export default ModalLibro