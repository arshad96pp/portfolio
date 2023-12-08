import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='Hero'>

      <div className="hero-flex">
         <div className="hero-left">
          <h1>Hello,I'm Arshad</h1>
          <h2>Front-End Developer</h2>
          <p>Former Graphics-Designer seeking apply competend <br /> development skills with focus on collaboration,communication, and passion</p>
         <a href="ARSHAD_React js.pdf" download={'ARSHAD_React js.pdf'}> <button>Download Cv</button></a>
         </div>

         <div className="hero-right">

          <div className="cercle"></div>
          <div className="cercle-image">
            <img src="https://www.latest-hairstyles.com/wp-content/uploads/hairstyles-for-men-with-thick-hair-1x1-1.jpg" alt="" />
          </div>
          <div className="cercle3"></div>
          
         </div>

      </div>

    </div>
  )
}

export default Hero