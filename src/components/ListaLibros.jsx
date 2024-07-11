/* eslint-disable react/prop-types */

//componente que se va a utilizar en el Manage account y pagprincipal
//por cada iterar vamos a un componente cardbook(libro)
import CardBook from "./CardBook"
//listaLibros ya tiene la información de la API
    
    const ListaLibros = ({claseHover,cardLibro,btnEliminarL,mostrarBotones,mostrarC, btnEditarL, btnAgregarL, btnQuitarL, btnInfoL})=>{//estructura - conjunto de todas las cards
        
        
    return( 
        <>
           
            {cardLibro.map((iterar,index)=>(
            <div key={index} className={claseHover}>
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
                mostrarC={mostrarC} //mostrarC tendrá el true o false
                btnAgregar={btnAgregarL}
                btnQuitar={btnQuitarL}
                btnEliminar={()=>btnEliminarL(iterar.id)}
                btnInfo={()=>btnInfoL(localStorage.setItem("libroLocal", iterar.id))}
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
                </div>
            ))}
        </>
    )
    
}
export default ListaLibros