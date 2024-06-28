import { Route, Routes } from "react-router-dom"
    import InicioSesion from "../pages/InicioSesion"
    import CrearCuenta from "../pages/CrearCuenta"
    import PagPrincipal from "../pages/PagPrincipal"

const PageRoutes = ()=>{
    return(
        <Routes>
        <Route path="/" element={<InicioSesion/>}/>
        <Route path="/crearcuenta" element={<CrearCuenta/>}/>
        <Route path="/iniciarsesion" element={<InicioSesion/>}/>
        <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
        <Route path="/paginaprincipal" element={<PagPrincipal/>}/>
        </Routes>
    )
}
export default PageRoutes