import { useNavigate } from "react-router-dom"

const Navbar=()=>{
    const navigate = useNavigate()
    const irInicio = ()=>{
        navigate("/")
    }


    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a onClick={()=>{navigate('/paginaprincipal')}} className="navbar-brand" href="#">
      Home
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a onClick={()=>{navigate('/acercadenosotros')}} className="nav-link active" aria-current="page" href="#">
            About us
          </a>
        </li>
        <li className="nav-item">
          <a onClick={()=>{navigate('/micuenta')}} className="nav-link active" aria-current="page" href="#">
            My account
          </a>
        </li>
        </ul>
        <button onClick={irInicio} className="btn btn-outline-success" type="submit">
          Log out
        </button>
      
    
    </div>
  </div>
</nav>


        </>
    )
}
export default Navbar
