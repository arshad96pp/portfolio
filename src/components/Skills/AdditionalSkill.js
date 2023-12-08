import React from 'react'
import './AdditionalSkill.css'
import Fade from 'react-reveal/Fade';

function AdditionalSkill() {
  return (
    <Fade Left duration={1500}>

    <div className='add-skill'>
        <h1>Additional Technologies and skills</h1>

     <div className="skill-box">
        <div className="round-item">
            <div className="round"></div>
            <h3>Django</h3>
        </div>
        <div className="round-item">
            <div className="round"></div>
            <h3>Mysql</h3>
        </div>
        <div className="round-item">
            <div className="round"></div>
            <h3>Python</h3>
        </div>
       
     </div>

     

    </div>
    </Fade>

  )
}

export default AdditionalSkill