import React from 'react'
import './education.css'
import Fade from 'react-reveal/Fade';


function Education() {
  return (
    <div>
     <Fade Left duration={1500}>

        <h1>Education</h1>
        <div className="education">

        <div className="years">
        <h3>2023</h3>
        <h3>2022</h3>
        <h3 className='three'>2020</h3>

        <h3 className='foarth'>2018</h3>

        
        </div>
        <div className="line">
        
        <div className='underline'>
          <div className="round rd"></div>
          <div className="round1 rd"></div>
          <div className="round2 rd"></div>
          <div className="round3 rd"></div>


        </div>

        </div>
        
        <div className="details">

        <div className="course">
          <h4>PYTHON FULL STACK</h4>
          <h4 className='c-details'>TECHOLAS TECHNOLOGY</h4>
        </div>

        <div className="course course2">
          <h4>GREAPHIC DESIGN</h4>
          <h4 className='c-details'>OXDU TECHSCHOOL</h4>
        </div>

        <div className="course course3">
          <h4>PLUS TWO</h4>
          <h4 className='c-details'>HL HUDA </h4>
        </div>

        <div className="course course4">
          <h4>SSLC</h4>
          <h4 className='c-details'>PPTMYHSS CHERUR</h4>
        </div>

        </div>



        </div>
        </Fade>

        
        </div>
  )
}

export default Education