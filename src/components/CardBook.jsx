/* eslint-disable react/prop-types */

const CardBook=({titulo, autor, cantidad, categoria, estado, ubicacion, subidopor, imagen='https://cdn3.iconfinder.com/data/icons/education-3-6/48/105-512.png'})=>{
    
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
  </div>
</div>
    )
}
export default CardBook