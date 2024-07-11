/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import InputPP from "./InputPP"
import {Button} from "react-bootstrap"
import Estado from "./Estado"
import Opciones from "./Opciones"
// eslint-disable-next-line no-unused-vars

const PutModal = ({ mostrar, ocultar, id, titulo, autor, cantidad, categoria, estado, ubicacion, btnEditarM}) => {

  //Estados de cada input y input de elección del Modal
  const [tituloE, setTituloE] = useState(titulo)
  const [autorE, setAutorE] = useState(autor)
  const [cantidadE, setCantidadE] = useState(cantidad)
  const [ubicaE, setUbicaE] = useState(ubicacion)
  const [cateE, setCateE] = useState(categoria)
  const [estadoE, setEstadoE] = useState(estado)
  
  //validaciones del input del Modal
  const tituloR = useRef('')
  const autorR = useRef('')
  const cantidadR = useRef('')
  const ubicaR = useRef('')

    useEffect(() => {
      setTituloE(titulo)
      setAutorE(autor)
      setCantidadE(cantidad)
      setUbicaE(ubicacion)
      setCateE(categoria)
      setEstadoE(estado)      
    }, [titulo, autor, cantidad, ubicacion, categoria, estado])

  const validarModal = ()=>{
    const titulo = tituloR.current.value.trim('')
    const autor = autorR.current.value.trim('')
    const cantidad = cantidadR.current.value.trim('')
    const ubica = ubicaR.current.value.trim('')

    if (!titulo || !autor || !cantidad || !ubica) {
      alert ("Por favor llene los campos")      
      return
    } else{
      btnEditarM(id, tituloE, autorE, cantidadE, ubicaE,estadoE,cateE)
      ocultar()
    }
  }


  return (
    <>
      <Modal show={mostrar} onHide={ocultar} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">My books</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Books information</h4>
          <div className='d-flex flex-column mx-auto justify-content-center align-items-center'>
            <InputPP tipo={"text"} nombre={"Titulo"} clase={"w-25 mb-3 p-1"} refVali={tituloR} valor={tituloE} cambio={(e)=>setTituloE(e.target.value)}/>
            <InputPP tipo={"text"} nombre={"Autor"} clase={"w-25 mb-3 p-1"} refVali={autorR} valor={autorE} cambio={(e)=>setAutorE(e.target.value)}/>
            <InputPP tipo={"text"} nombre={"Disponible"} clase={"w-25 mb-3 p-1"} refVali={cantidadR} valor={cantidadE} cambio={(e)=>setCantidadE(e.target.value)}/>
            <Estado valorActual={estadoE} valor={(e)=>setEstadoE(e.target.value)} clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"}/>
            <Opciones valorActual={cateE} evento={(e)=> setCateE(e.target.value)} clase={"text-center d-flex justify-content-center mx-auto mb-3 p-1"}/>
            <InputPP tipo={"text"} nombre={"Ubicación"} refVali={ubicaR} valor={ubicaE} cambio={(e)=>setUbicaE(e.target.value)} clase={"w-25 mb-3 p-1"}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button nombre={"Subir cambios"} evento={validarModal}>Editar información</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default PutModal