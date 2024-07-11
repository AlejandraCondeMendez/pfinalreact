/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import CardBook from './CardBook';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel=({ cardLibro, btnEliminarL, mostrarBotones, mostrarC, btnEditarL, btnAgregarL, btnQuitarL, btnInfoL })=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5, // número de cards que se mostrarán a la vez
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <>
        <Slider {...settings}>
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
            ))}
        </Slider>
        </>
    )
}
export default Carrusel 