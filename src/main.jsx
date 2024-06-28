import React from 'react'
import ReactDOM from 'react-dom/client'
import InicioSesion from './pages/InicioSesion.jsx'
import CrearCuenta from './pages/CrearCuenta.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PagPrincipal from './pages/PagPrincipal.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <CrearCuenta/>
//   },
//   {
//     path:"/iniciarsesion",
//     element: <InicioSesion/>
//   }
//   ,{
//     path: "/paginaprincipal",
//     element: <PagPrincipal/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App/>
    {/* <RouterProvider router={router}/> */}
    
  </React.StrictMode>,
)
