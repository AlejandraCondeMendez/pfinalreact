import Navbar from "../components/Navbar"
import Opciones from "../components/Opciones"
import CardBook from "../components/CardBook"
import Input from "../components/Input"
import HamburgerMenu from "../components/HamburgerMenu"
import InfoGeneral from "../components/InfoGeneral"


const PagPrincipal = () => {
    
    
    
    return (
        <>
            <Navbar/>
            <div className="hamburgerMover">
                <HamburgerMenu />
            </div>
            <h1 className="text-center">¡Welcome! Start to read now</h1>
            <Opciones titulo={"Categorías de la biblioteca"}/>

            <div className="d-flex flex-row gap-3 mt-5 mb-5">
                <p>Libros disponibles para venta</p>
                <Input tipo={"number"} valor={0} />
                <p>Libros disponibles para intercambio</p>
                <Input tipo={"number"} valor={0} />
                <p>Libros disponibles en ambas opciones</p>
                <Input tipo={"number"} valor={0} />
            </div>
            <div className="d-flex flex-row gap-3 mt-5">
                <CardBook titulo={'La sombra del viento'} autor={'Carlos Ruiz Zafón'} cantidad={'4'} categoria={'general'}
                    estado={'intercambio'} subidopor={'angie23'} ubicacion={'Santa Ana'} />
                <CardBook titulo={'El juego del ángel'} autor={'Carlos Ruiz Zafón'} cantidad={'2'} categoria={'novela'} estado={'intercambio'} subidopor={'juanperez'} ubicacion={'Madrid'} />
                <CardBook titulo={'1984'} autor={'George Orwell'} cantidad={'3'} categoria={'distopía'} estado={'venta'} subidopor={'maria34'} ubicacion={'Barcelona'} />
                <CardBook titulo={'Cien años de soledad'} autor={'Gabriel García Márquez'} cantidad={'5'} categoria={'literatura'} estado={'intercambio'} subidopor={'sofia89'} ubicacion={'Bogotá'} />
                <CardBook titulo={'Don Quijote de la Mancha'} autor={'Miguel de Cervantes'} cantidad={'1'} categoria={'clásicos'} estado={'venta'} subidopor={'luis15'} ubicacion={'Sevilla'} />
            </div>
            <InfoGeneral/>


        </>
    )
}
export default PagPrincipal
