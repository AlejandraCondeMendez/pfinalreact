/* eslint-disable react/prop-types */
//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos un componente cardbook(libro)
import CardBook from "./CardBook"
import { useNavigate } from "react-router-dom"
const ListaLibros =({cardLibro,btnEliminar,mostrarBotones,mostrarC, agregarCarrito})=>{//estructura
    
    const navigate = useNavigate()
    const recuperarIdLibro=(id)=>{
        localStorage.setItem("idLibro",id)
        navigate("/cardpage")
    }
    return( 
        <>
            {cardLibro.map((iterar)=>(
                <div key={iterar.id} onClick={()=>recuperarIdLibro(iterar.id)}> 
                <CardBook
                key={iterar.id}
                titulo={iterar.titulo}
                autor={iterar.autor}
                cantidad={iterar.cantidad}
                categoria={iterar.tipo}
                estado={iterar.estado}
                ubicacion={iterar.direccion}
                subidopor={iterar.subidopor}
                mostrar={mostrarBotones}
                mostrarC={mostrarC}
                btnEliminar={()=>btnEliminar(iterar.id)}
                btnAgregar={agregarCarrito}
                />
                </div>
            ))}
        </>
    )
    
}
export default ListaLibros