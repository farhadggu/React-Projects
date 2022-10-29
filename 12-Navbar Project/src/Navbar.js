import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTwitter } from "react-icons/fa"
import logo from "./images/logo.jpg"
import "./Navbar.css"

const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null)

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])

  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='log' />
                <button 
                    className='nav-toggle'
                    onClick={() => setShowLinks(!showLinks)}
                >
                    <FaBars />
                </button>
            </div>
            <div className='links-container show-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                    <li>
                        <a href='https://google.com'>home</a>
                    </li>

                    <li>
                        <a href='https://google.com'>about</a>
                    </li>

                    <li>
                        <a href='https://google.com'>contact</a>
                    </li>

                    <li>
                        <a href='https://google.com'>products</a>
                    </li>

                    <li>
                        <a href='https://google.com'>products</a>
                    </li>
                </ul>
            </div>
            <ul className='social-icons'>
                <li>
                    <a href="https://google.com"><FaTwitter /></a>
                </li>

                <li>
                    <a href="https://google.com"><FaTwitter /></a>
                </li>

                <li>
                    <a href="https://google.com"><FaTwitter /></a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar