import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputPP from './InputPP';
import Opciones from './Opciones';
import Estado from './Estado';
import { postData } from '../services/fetch';
import { useRef, useState } from 'react';

const ModalLibro = (props) => {

  const [tituloE, setTitulo] = useState('')
  const [autorE, setAutor] = useState('')
  const [dispoE, setDispo] = useState('')
  const [ubicaE, setUbica] = useState('')
  const [estadoE, setEstado] = useState('')
  const [opcionesE, setOpciones] = useState('')

  
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
    } else { await agregarLibro({
      titulo: tituloE, //titulo viene de la API - titulo viene del estado
      autor: autorE,
      usuarioID: localStorage.getItem("localID"),
      cantidad: dispoE,
      tipo: opcionesE, //opciones
      estado: estadoE,
      subidopor: localStorage.getItem("localUser"),
      direccion: ubicaE
    }, "libros")} //obj y endpoint
    setTitulo("")
    setAutor("")
    setDispo("")
    setUbica("")
    setEstado("")
    setOpciones("")
  }

  //cada libro se agrega a la API
  const agregarLibro = async (libro, endpoint)=>{
    await postData(libro, endpoint)
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
              <Estado clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} valor={(e)=>{
                setEstado(e.target.value)
                console.log(estadoE)
              }
                }/>
              <Opciones clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"} evento={(e)=>{setOpciones(e.target.value)}}  titulo={"Categorías"}/>
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
  export default ModalLibro