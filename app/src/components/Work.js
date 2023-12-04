import React from 'react'
import './Work.css'
import irctc from './../assets/work/irctc.png'
import ops_board from './../assets/work/ops_board.png'
import testimonials from './../assets/work/ola.png'

const Work = () => {
  return (
    <div className='work' id='work'>
      <div className='container'>
        <h2>Selected Work</h2>
        <span className='line'></span>
        <div className='content'>
         <a href="https://dribbble.com/shots/23175159-Ops-Dashboard?utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=Ops%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=Ops%20Dashboard&utm_medium=Social_Share">
              <div className='card'>
                  <img src={ops_board} alt='ops_dashboard'/>
                  <p>Increased team productivity</p>
                  <p><span>Ops Dashboard</span></p>
                  <p>Project Deployed</p>
              </div>
            </a>
          <a href="https://dribbble.com/shots/23054899-Ola-Redesign-Casestudy?utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=Ola%20Redesign%20Casestudy&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=Ola%20Redesign%20Casestudy&utm_medium=Social_Share">
            <div className='card'>
                <img src={testimonials} alt='ola casestudy'/>
                <p>Improved ride search accessibility</p>
                <p><span>Ola Redesign</span></p>
                <p>Casestudy</p>
            </div>
            </a>
            <a href="https://dribbble.com/shots/22892445-IRCTC-Redesign-casestudy?utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=IRCTC%20Redesign%20casestudy&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=SimranBhojwani&utm_content=IRCTC%20Redesign%20casestudy&utm_medium=Social_Share">
              <div className='card'>
                  <img src={irctc} alt='irctc casestudy'/>
                  <p>Simplified train search</p>
                  <p><span>IRCTC Redesign</span></p>
                  <p>Casestudy</p>
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