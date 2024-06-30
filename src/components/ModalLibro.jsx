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
        <Input tipo={"text"} nombre={"Titulo"}/>
        <Input tipo={"text"} nombre={"Autor"}/>
        <Input tipo={"text"} nombre={"Disponile"}/>
        <Opciones/>
        <Estado/>
        <Input tipo={"text"} nombre={"Ubicación"}/>
      </Modal.Body>
      <Modal.Footer>
        <Button>Send information</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}
export default ModalLibro