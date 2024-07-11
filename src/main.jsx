import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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
