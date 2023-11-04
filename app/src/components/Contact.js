import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='container'>
            <div className='col-1'>
                <h2>Get in touch</h2>
                <span className='line'></span>
                <p>If you like my work and want to connect?</p>
                <a href='mailto: 2015simran.bhojwani@ves.ac.in'><button className='button'>Email Me</button></a>
            </div>
            <div className='col-2'>
                <p>Thanks for visiting</p>
                <p>｡^‿^｡</p>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
