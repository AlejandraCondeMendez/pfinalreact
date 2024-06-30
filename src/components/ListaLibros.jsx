/* eslint-disable react/prop-types */
import CardBook from "./CardBook"

const ListaLibros =({cardLibro})=>{//estructura
    
    
    return(
        <>
        {cardLibro.map((iterar)=>(//recorrer
            <CardBook
            key={iterar.id}
            titulo={iterar.titulo}//datos de la CARD - iterar.api
            autor={iterar.autor}
            cantidad={iterar.cantidad}
            categoria={iterar.tipo}
            estado={iterar.estado}
            ubicacion={iterar.direccion}
            subidopor={iterar.subidopor}
            />
        ))}
        </>
    )
}
export default ListaLibros