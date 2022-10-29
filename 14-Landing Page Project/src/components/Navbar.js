import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../images/logo.svg'
import "./Navbar.css"
import { useGlobalContext } from '../context/context' 

const Navbar = () => {

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, {center, bottom})
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>

          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar