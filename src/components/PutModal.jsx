import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputPP from './InputPP';
import Opciones from './Opciones';
import Estado from './Estado';
import { postData } from '../services/fetch';
import { useRef, useState } from 'react';

// eslint-disable-next-line no-unused-vars
const PutModal = (props, {id, titulo:tituloInicial, autor:autorInicial, cantidad:cantidadInicial, estado:estadoInicial, ubicacion:ubicaInicial, categoria:categoriaInicial,  btnEditar}) => {

  const [tituloE, setTitulo] = useState(tituloInicial)
  const [autorE, setAutor] = useState(autorInicial)
  const [dispoE, setDispo] = useState(cantidadInicial)//cantidad
  const [ubicaE, setUbica] = useState(ubicaInicial)
  const [estadoE, setEstado] = useState(estadoInicial)
  const [categoriaE, setCategoria] = useState(categoriaInicial)//opciones

  const actualizarData =(e)=>{
    e.preventDefault()
    setTitulo(tituloInicial)
    setAutor(autorInicial)
    setDispo(cantidadInicial)
    setUbica(ubicaInicial)
    setEstado(estadoInicial)
    setCategoria(categoriaInicial)

    btnEditar(e,id,tituloE,autorE,dispoE,ubicaE,estadoE,categoriaE)
  }  

  const tituloR = useRef('')
  const autorR = useRef('')
  const disponibleR = useRef('')
  const ubicacionR = useRef('')
  
  const ValInModal = async () => {
    let titulo = tituloR.current.value.trim();
    let autor = autorR.current.value.trim();
    let disponible = disponibleR.current.value.trim();
    let ubicacion = ubicacionR.current.value.trim();
    
    if (!titulo || !autor || !disponible || !ubicacion) {
      alert("Por favor llene todos los campos")
      return
    } else {
        actualizarData()
    } //obj y endpoint
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
            <InputPP tipo={"text"} nombre={"Titulo"} clase={"w-25 mb-3 p-1"} refVali={tituloR} valor={tituloE} cambio={(e)=>setTitulo(e.target.value)}/>
              <InputPP tipo={"text"} nombre={"Autor"} clase={"w-25 mb-3 p-1"} refVali={autorR} valor={autorE} cambio={(e)=>setAutor(e.target.value)} />
              <InputPP tipo={"text"} nombre={"Disponile"} clase={"w-25 mb-3 p-1"} refVali={disponibleR} valor={dispoE} cambio={(e)=>setDispo(e.target.value)} />
              <Estado clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"}/>
              <Opciones clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} titulo={"Categorías"}/>
              <InputPP tipo={"text"} nombre={"Ubicación"} clase={"w-25 mb-3 p-1"} refVali={ubicacionR} valor={ubicaE} cambio={(e)=>setUbica(e.target.value)}/>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ValInModal}>Send information</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  export default PutModal