import React from 'react'
import ReactDOM from 'react-dom/client'
import InicioSesion from './components/InicioSesion.jsx'
import CrearCuenta from './components/CrearCuenta.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PagPrincipal from './components/PagPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CrearCuenta/>
  },
  {
    path:"/iniciarsesion",
    element: <InicioSesion/>
  }
  ,{
    path: "/paginaprincipal",
    element: <PagPrincipal/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
