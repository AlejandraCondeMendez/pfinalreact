import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from './Input';
import Opciones from './Opciones';
import Estado from './Estado';
import { useRef } from 'react';

const ModalLibro = (props) => {

  const tituloR = useRef('')
  const autorR = useRef('')
  const disponibleR = useRef('')
  const ubicacionR = useRef('')

  const ValInModal = () => {

    let titulo = tituloR.current.value.trim();
    let autor = autorR.current.value.trim();
    let disponible = disponibleR.current.value.trim();
    let ubicacion = ubicacionR.current.value.trim();

    if (!titulo || !autor || !disponible || !ubicacion) {
      alert("Por favor llene todos los campos")
    }
  }


    return (
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
            <h4>Books information</h4>
            <div className='d-flex flex-column mx-auto justify-content-center align-items-center'>
              <Input tipo={"text"} nombre={"Titulo"} clase={"w-25 mb-3 p-1"} refVali={tituloR} />
              <Input tipo={"text"} nombre={"Autor"} clase={"w-25 mb-3 p-1"} refVali={autorR} />
              <Input tipo={"text"} nombre={"Disponile"} clase={"w-25 mb-3 p-1"} refVali={disponibleR} />
              <Estado clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} />
              <Opciones clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} titulo={"Categorías"} />
              <Input tipo={"text"} nombre={"Ubicación"} clase={"w-25 mb-3 p-1"} refVali={ubicacionR} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ValInModal}>Send information</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  export default ModalLibro