import Navbar from "../components/Navbar"
import Formulario from "../components/Formulario"
import Footer from "../components/Footer"
import HamburgerMenu from "../components/HamburgerMenu"

const AcercaDnostros =()=>{

    return(
        <>
        <Navbar/>
        <HamburgerMenu/>
        
        <h1 className="titulo">About Freebook</h1>

        <h2>Historia</h2>
        <div>
        <p>LibroLibre nació de la pasión por la lectura y el deseo de compartir el amor por los libros con 
            la comunidad. Todo comenzó cuando un grupo de amigos se dio cuenta de que sus estanterías estaban
            llenas de libros que ya habían leído y que podrían ser útiles para otros lectores. Decidieron crear
            una plataforma donde los libros usados pudieran tener una segunda vida, permitiendo a las personas
            descubrir nuevas historias y conocimientos sin tener que comprar libros nuevos. Así, en 2023, nació
            LibroLibre, con la misión de conectar a los amantes de la lectura y fomentar un intercambio sostenible
            de libros.</p>
        </div>
        
        <h2>Misión</h2>
        <p>Nuestra misión en FreeBook es promover la lectura accesible y sostenible al facilitar la compra, venta 
            y el intercambio de libros usados entre lectores. Nos comprometemos a crear una comunidad donde cada 
            libro encuentre un nuevo hogar y cada lector encuentre su próxima gran historia sin dañar el medio 
            ambiente.</p>

        <h2>Visión</h2>
        <p>Nuestra visión es convertirnos en la plataforma líder a nivel mundial para el intercambio y venta de
            libros usados, fomentando una cultura de reutilización y amor por la lectura. Aspiramos a ser el lugar
            donde cada libro tenga múltiples vidas y donde los lectores de todo el mundo puedan conectarse y
            compartir sus pasiones literarias.</p>
        
        <h2>Valores</h2>
        <ul>
            <li>Accesibilidad</li>
            <li>Calidad</li>
            <li>Comunidad</li>
            <li>Sostenibilidad</li>
        </ul>
        <Formulario/>
        <Footer/>



        
        </>
    )
}
export default AcercaDnostros