import React from 'react'
import {Link} from 'react-scroll';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <ul>
             <li className='nav-item'>
                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                </li>
                <li className='nav-item'>
                <Link to="work" spy={true} smooth={true} offset={-100} duration={500} >Work</Link>
                </li>
                <li className='nav-item'>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
                </li>
                <li className='nav-item'>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>
                </li>
        </ul>
        <div className='bottom'>
            <span className='line'></span>
            <p>2023 &copy; Created by Simran Bhojwani</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
