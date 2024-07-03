/* eslint-disable react/prop-types */
//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos un componente cardbook(libro)
import CardBook from "./CardBook"

const ListaLibros =({cardLibro,btnEditar,btnEliminar})=>{//estructura
    
    return( 
        <>
            {cardLibro.map((iterar)=>(
                <CardBook
                key={iterar.id}
                titulo={iterar.titulo}
                autor={iterar.autor}
                cantidad={iterar.cantidad}
                categoria={iterar.tipo}
                estado={iterar.estado}
                ubicacion={iterar.direccion}
                subidopor={iterar.subidopor}
                btnEditar={()=>btnEditar(iterar.id, iterar.titulo, iterar.autor, iterar.cantidad, iterar.categoria, iterar.estado, iterar.ubicacion)}
                btnEliminar={()=>btnEliminar(iterar.id)}
            />
            ))}
        </>
    )
    
}
export default ListaLibros