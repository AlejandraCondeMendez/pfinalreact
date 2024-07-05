import { Route, Routes } from "react-router-dom"
import InicioSesion from "../pages/InicioSesion"
import CrearCuenta from "../pages/CrearCuenta"
import PagPrincipal from "../pages/PagPrincipal"
import ManageAccount from "../pages/ManageAccount"
import AcercaDnostros from "../pages/AcercaDnosotros"
import CardPage from "../pages/CardPage"

const PageRoutes = () => {
    
    return (
        <Routes>
            <Route path="/" element={<PagPrincipal />} />
            <Route path="/crearcuenta" element={<CrearCuenta />} />
            <Route path="/iniciarsesion" element={<InicioSesion />} />
            <Route path="/paginaprincipal" element={<PagPrincipal />} />
            <Route path="/micuenta" element={<ManageAccount />} />
            <Route path="/acercadenosotros" element={<AcercaDnostros />} />
            <Route path="/cardpage" element={<CardPage />} />
        </Routes>
    )
}
export default PageRoutes