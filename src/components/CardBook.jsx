/* eslint-disable react/prop-types */
import Boton from "./Boton"

/*renerizzar. cargar o lo que se muestra en la página
propiedades principales, de funcionalidad y renderizado*/

const CardBook = ({mostrar, mostrarC, titulo, autor, cantidad, categoria, estado, ubicacion, subidopor, btnInfo, btnEliminar, btnEditar, btnAgregar, btnQuitar, imagen = 'https://cdn3.iconfinder.com/data/icons/education-3-6/48/105-512.png' }) => {
//Los datos en blanco son las propiedades que tendrá el card
 

  return (
    <div className="card" style={{ width: "20rem" }}>
      <h5 className="card-title">Libro: {titulo}</h5>{/*propiedad*/}
      <p className="text-muted">Usuario: {subidopor}</p>{/*propiedad*/}
      <img src={imagen} className="card-img-top" alt="..." />{/*propiedad*/}
      <div className="card-body">
        <p>Autor: {autor}</p>{/*propiedad*/}
        <p>Disponibles: {cantidad}</p>{/*propiedad*/}
        <p>Estado: {estado}</p>{/*propiedad*/}
        <p>Categoría: {categoria}</p>{/*propiedad*/}
        <p className="card-text">
          Ubicación: {ubicacion}{/*propiedad*/}
        </p>
        {/*RENDERIZADO*/}
        {mostrar && //IF (si es verdadero mostrará el botón - el verdadero se encuentra en la páagina principal(true) y en my account (true))
          <>
            <Boton evento={btnEliminar} tipo={"button"} nombre={"Eliminar"} className={"btn btn-danger p-2"} />
            <Boton evento={btnEditar} tipo={"button"} nombre={"Editar"} className={"btn btn-warning p-2"} />
          </>
        }

        {mostrarC &&
          <>
            <Boton evento={btnQuitar} tipo={"button"} nombre={"Remove"} className={"btnRemove p-2"}/>
            <Boton evento={btnAgregar} tipo={"button"} nombre={"Add to cart"} className={"btnCart p-2"}/>
            <Boton evento={btnInfo} tipo={"button"} nombre={"More information"} className={"btnInfo btn btn-warning p-2"}/>
            
          </>
        }
      </div>
    </div>
  )
}
export default CardBook



