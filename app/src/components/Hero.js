import React from 'react'
import {Link} from 'react-scroll';
import './Hero.css'
import simran from './../assets/about/profile.jpg'

const Hero = () => {
  return (
    <div className='hero' id="hero">
        <div className='content'>
        <img src={simran} alt='Simran Bhojwani Profile'/>
            <div className='col-1'>
              <p> Hi I'm</p>
              <p>Simran Bhojwani</p>
              <p>Nice to meet you :) </p>
              <Link to="work" spy={true} smooth={true} offset={-100} duration={500}><button className='button'>Scroll for more</button></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Hero
