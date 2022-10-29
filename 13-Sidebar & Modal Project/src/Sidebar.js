import React from 'react'
import { 
    FaTimes, 
    FaHome, 
    FaUserFriends, 
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch
} from "react-icons/fa"
import logo from "./images/logo.jpg"
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'} `}>
        <div className='sidebar-header'>
            <img src={logo} className="logo" alt='coding addict' />
            <button className='close-btn' onClick={closeSidebar}>
                <FaTimes />
            </button>
        </div>
        <ul className='links'>
            <li><a href="https://google.com"><FaHome /> home</a></li>
            <li><a href="https://google.com"><FaUserFriends /> team</a></li>
            <li><a href="https://google.com"><FaFolderOpen /> projects</a></li>
            <li><a href="https://google.com"><FaCalendarAlt /> calender</a></li>
            <li><a href="https://google.com"><FaWpforms /> documents</a></li>
        </ul>
        <ul className='social-icons'>
            <li><a href="https://google.com"><FaBehance /></a></li>
            <li><a href="https://google.com"><FaFacebook /></a></li>
            <li><a href="https://google.com"><FaLinkedin /></a></li>
            <li><a href="https://google.com"><FaTwitter /></a></li>
            <li><a href="https://google.com"><FaSketch /></a></li>
        </ul>
    </aside>
  )
}

export default Sidebar
