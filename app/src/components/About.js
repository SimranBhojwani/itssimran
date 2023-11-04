import React from 'react'
import './About.css'
import simran from './../assets/about/about.png'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <h2>About</h2>
        <span className='line'></span>
        <div className='content'>
          <img src={simran} alt='Simran Bhojwani Profile'/>
          <div className='col-2'>
              <h3>Background</h3>
              <br/>
              <div className='step'>
                  <p>2021 - present</p>
                  <p><span>BrowserStack </span>(Remote)</p>
                  <p className='post'>Senior Software Development Engineer in Test</p>
              </div>
              <div className='step'>
                  <p>2019 - 2021</p>
                  <p><span>BrowserStack </span>(Mumbai, India)</p>
                  <p>Software Development Engineer in Test</p>
              </div>
              <div className='step'>
                  <p>2015 - 2019</p>
                  <p><span>Gratuation </span>Mumbai University</p>
                  <p>Information Technology</p>
              </div>
              <a href="https://in.linkedin.com/in/simran-bhojwani">
                <p>View LinkedIn &nbsp; &rarr;</p>
              </a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
