import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const HamburgerMenu = () => {

  const navigate = useNavigate()
  const navegar = ()=>{
      navigate("/acercadenosotros")
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu-content ${isOpen ? 'show' : ''}`}>
        <a className='text-nowrap' onClick={navegar} >About us</a>
        <a className='text-nowrap' onClick={()=>{navigate('/micuenta')}}>My account</a>
      </div>
    </div>
    </>
  );
};

export default HamburgerMenu;