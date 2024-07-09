/* eslint-disable react/prop-types */

//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos a un componente cardbook(libro)
import CardBook from "./CardBook"
//listaLibros ya tiene la información de la API
    
    const ListaLibros = ({cardLibro,btnEliminarL,mostrarBotones,mostrarC, btnEditarL})=>{//estructura - conjunto de todas las cards

    return( 
        <>
            {cardLibro.map((iterar)=>(
                <CardBook
                key={iterar.id} //toma el valor - accede a la propiedad de la API
                titulo={iterar.titulo}
                autor={iterar.autor}
                cantidad={iterar.cantidad}
                categoria={iterar.tipo}
                estado={iterar.estado}
                ubicacion={iterar.direccion}
                subidopor={iterar.subidopor}
                mostrar={mostrarBotones} //mostrarBotones tendrá el true o false
                mostrarC={mostrarC} //mostrarBotones tendrá el true o false
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