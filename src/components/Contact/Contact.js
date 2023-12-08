import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="c-box">
            <h4 className='feel'>Feel free to contact me</h4>
        </div>
        <div className="c-box">
            <h4><a href="">arshadpp041@gmail.com</a></h4>
        </div>
      
        <div className="c-box">
            <h5><i class="fa-brands fa-linkedin"></i></h5>
            <h5><i class="fa-brands fa-square-instagram"></i></h5>
            <h5><i class="fa-brands fa-square-github"></i></h5>
        </div>
    </div>
  )
}

export default Contact