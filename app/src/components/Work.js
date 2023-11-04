import React from 'react'
import './Work.css'
import irctc from './../assets/work/irctc.png'
import navbar from './../assets/work/navbar.png'
import testimonials from './../assets/work/testimonials.png'

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='container'>
        <h2>Selected Work</h2>
        <span className='line'></span>
        <div className='content'>
            <a href="https://dribbble.com/shots/22892445-IRCTC-Redesign-casestudy">
              <div className='card'>
                  <img src={irctc} alt='irctc casestudy'/>
                  <p>Simplified train search</p>
                  <p><span>IRCTC Redesign</span></p>
                  <p>Casestudy</p>
              </div>
            </a>
            <a href="https://dribbble.com/shots/22822556-Website-Navigation">
              <div className='card'>
                  <img src={navbar} alt='saas navbar'/>
                  <p>Dynamic website navigation</p>
                  <p><span>Visual Design</span></p>
                  <p>Daily UI #053</p>
              </div>
            </a>
            <a href="https://dribbble.com/shots/22714707-Testimonials">
            <div className='card'>
                <img src={testimonials} alt='testimonials'/>
                <p>Attractive customer testimonials</p>
                <p><span>Visual Design</span></p>
                <p>Daily UI #039</p>
            </div>
            </a>
        </div>
        <a href="https://dribbble.com/SimranBhojwani">
          <p>View Dribbble &nbsp; &rarr;</p>
        </a> 
      </div>
    </div>
  )
}

export default Work