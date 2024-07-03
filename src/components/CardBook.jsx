/* eslint-disable react/prop-types */

import Boton from "./Boton"
const CardBook=({mostrar,mostrarC,titulo, autor, cantidad, categoria, estado, ubicacion, subidopor, btnEliminar,btnEditar,btnAgregar, imagen='https://cdn3.iconfinder.com/data/icons/education-3-6/48/105-512.png'})=>{
    
    return(
    <div className="card" style={{ width: "18rem" }}>
    <h5 className="card-title">Libro: {titulo}</h5>
    <p className="text-muted">Usuario: {subidopor}</p>
  <img src={imagen} className="card-img-top" alt="..." />
  <div className="card-body">
    
    <p>Autor: {autor}</p>
    <p>Disponibles: {cantidad}</p>
    <p>Categoría: {categoria}</p>
    <p>Estado: {estado}</p>
    <p className="card-text">
      Ubicación: {ubicacion}
    </p>
    {mostrar &&
    <>
    <Boton evento={btnEliminar} tipo={"button"} nombre={"Eliminar"} className={"btn btn-danger p-2"}/>
    <Boton evento={btnEditar} tipo={"button"} nombre={"Editar"} className={"btn btn-warning  p-2"}/>
    </>
    }
    {mostrarC &&
    <>
    <Boton evento={btnAgregar} tipo={"button"} nombre={"Add cart"} className={"btn btn-success p-2"}/>
    </>
    }
    </div>
    
  </div>
    )
}
export default CardBook