/* eslint-disable react/prop-types */
//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos un componente cardbook(libro)
import CardBook from "./CardBook"
import { deleteData } from "../services/fetch"
const ListaLibros =({cardLibro,btnEditar,btnEliminar})=>{//estructura
    const deleteLibro = async(id) =>{
        await deleteData("libros",id)
        
    }
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
                btnEditar={()=>btnEditar(iterar.id)}
                btnEliminar={()=>deleteLibro(iterar.id)}
            />
            ))}
        </>
    )
    
}
export default ListaLibros