import { useState } from 'react';

const HamburgerMenu = () => {
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
        <a className='text-nowrap' href="#home">My account</a>
        <a className='text-nowrap' href="#services">Add a new book</a>
      </div>
    </div>
    </>
  );
};

export default HamburgerMenu;