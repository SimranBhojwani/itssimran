import React, { useState } from "react";
import './Work.css'
import irctc from './../assets/work/irctc.png'
import ops_board from './../assets/work/ops_board.png'
import testimonials from './../assets/work/ola.png'
import { CgClose } from "react-icons/cg";
import "./Modal.css";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  function toggle(popup) {
    if (popup === '1'){
      setModal1(!modal1);
    }
    if (popup === '2'){
      setModal2(!modal2);
    }
    if (popup === '3'){
      setModal3(!modal3);
    }
  }

  if(modal1) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(modal3) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className='work' id='work'>
      <div className='container'>
        <h2>Selected Work</h2>
        <span className='line'></span>
        <div className='content'>
        <a>
              <div className='card btn-modal' onClick={() => toggle('1')}>
                  <img src={ops_board} alt='ops_dashboard'/>
                  <p>Increased team productivity</p>
                  <p><span>Ops Dashboard</span></p>
                  <p>Project Deployed</p>
                  {modal1 && (
                      <div className="modal">
                        <div onClick={() => toggle('1')} className="overlay"></div>
                        <div className="modal-content">
                          <h3>Ops Dashboard</h3>
                          <br></br>
                          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSx8ZWEvc0DciE-11Fu0K_Ekd8irb4c7mwdGZFlY_L4730-T7e_S_tvutr70NMdojdU3o9VhJ_MCVhW/embed?start=true&loop=true&delayms=3000" frameborder="0" className="video_frame" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                          <div className="close-modal" onClick={() => toggle('1')}>
                           <CgClose />
                          </div>
                        </div>
                      </div>
                    )}
              </div>
            </a>
          <a>
            <div className='card btn-modal'  onClick={() => toggle('2')}>
                <img src={testimonials} alt='ola casestudy'/>
                <p>Improved ride search accessibility</p>
                <p><span>Ola Redesign</span></p>
                <p>Casestudy</p>
                {modal2 && (
                      <div className="modal">
                        <div onClick={() => toggle('2')} className="overlay"></div>
                        <div className="modal-content">
                          <h3>Ola Redesign</h3>
                          <br></br>
                          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTxXj_ztoNPZ5rTfOPgN4HBh_eyliJfvW1eD2q59O_dSgOJ-z9P9EzA6RS5_GT_JnbMLEApSrhRNzbH/embed?start=true&loop=true&delayms=3000" frameborder="0" className="video_frame" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                          <div className="close-modal" onClick={() => toggle('2')}>
                           <CgClose />
                          </div>
                        </div>
                      </div>
                    )}
            </div>
            </a>
            <a>
              <div className='card btn-modal' onClick={() => toggle('3')}>
                  <img src={irctc} alt='irctc casestudy'/>
                  <p>Simplified train search</p>
                  <p><span>IRCTC Redesign</span></p>
                  <p>Casestudy</p>
                  {modal3 && (
                      <div className="modal">
                        <div onClick={() => toggle('3')} className="overlay"></div>
                        <div className="modal-content">
                          <h3>IRCTC Redesign</h3>
                          <br></br>
                          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRaxhlhJgQMX1KRYFWeCVqTRFITs3S06UgkqnPYevw7csV2b9MMqz9dPcTzwcOyO6CQJM9SiILEL-9w/embed?start=true&loop=true&delayms=3000" frameborder="0" className="video_frame" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                          <div className="close-modal" onClick={() => toggle('3')}>
                           <CgClose />
                          </div>
                        </div>
                      </div>
                    )}
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