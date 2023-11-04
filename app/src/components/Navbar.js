import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from './../assets/navbar/logo.png'

import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMenu = () => setClick(false)
  return (
    <div className='header'>
        <nav className='navbar'>
            <Link href='/' className='logo'>
                <img src={logo}/>
            </Link>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={24}/>) : (<FaBars size={30}/>)}
                
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                <Link to="work" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Work</Link>
                </li>
                <li className='nav-item'>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                </li>
                <li className='nav-item'>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
