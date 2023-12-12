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
          {/* <img src={simran} alt='Simran Bhojwani Profile'/> */}
          <div className='col-1'>
              <h3>My Story</h3>
              <br/>
              <div className='step'>
                  <p className='post'>I joined BrowserStack as a fresher and being part of central team I solved some creative problems like email automation (Ruby), creating ops dashboard (React Bootstrap, NodeJS). During this time I got opportunity to work with different squads for MVP releases like addition of new data center, new automation framework called Cypress.</p>
                  <br></br>
                  <p className='post'>Later I moved to mobile team where I contributed in building mobile regression pipeline (Jenkins as code, NightwatchJS), adding new automation framework UIAutomator (Java) and SLA device releases. Currently, I look after the quality of our new speedboat, Low Code Automation, alongside mobile.</p>
                  <br></br>
                  <p className='post'>In the course of testing, I started observing user experience of features that we were adding. That's how I got know about UI/UX. Out of interest, I read online articles and create designs in my own time.</p>
              </div>
          </div>
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
                  <p><span>Graduation </span>Mumbai University</p>
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
