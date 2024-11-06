import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container py-5">
        <div className="main-row flex justify-between items-center flex-wrap">
          <div className="menu-logo">
            <img className='w-[200px] h-[45px]' src="public/images/Logo.png" alt="img" />
          </div>

          {/* Desktop Menu */}
          <ul className={`desktop-menu flex gap-[40px] ${isOpen ? 'show' : ''}`}>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/'}>Home</Link></li>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/about'}>About</Link></li>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/blog'}>Blog</Link></li>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/products'}>Products</Link></li>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/traveling'}>Traveling</Link></li>
            <li className='text-xl font-light text-[#0779E4]'><Link to={'/contact'}>Contact</Link></li>
          </ul>

          <div className="button-container">
            <button className='login-button'><Link to={'/Login'}>Login</Link></button>
          </div>

          {/* Toggle Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <IoCloseSharp size={50} /> : <IoMenuSharp size={50} />}
          </div>

          {/* Mobile Menu Pop-up */}
          {isOpen && (
            <div className="mobile-menu-popup">
              <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/traveling'}>Traveling</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
