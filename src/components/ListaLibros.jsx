/* eslint-disable react/prop-types */

//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos a un componente cardbook(libro)
import CardBook from "./CardBook"
    
    const ListaLibros =({cardLibro,btnEliminarL,mostrarBotones,mostrarC, btnEditarL})=>{//estructura

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
                mostrar={mostrarBotones}
                mostrarC={mostrarC}
                btnEliminar={()=>btnEliminarL(iterar.id)}
                btnEditar={()=> //btnEditar:
                    btnEditarL( //agarra todos los valores de la API
                        iterar.id,
                        iterar.titulo,
                        iterar.autor,
                        iterar.cantidad,
                        iterar.direccion
                    )
                }
                />
            ))}
        </>
    )
    
}
export default ListaLibros