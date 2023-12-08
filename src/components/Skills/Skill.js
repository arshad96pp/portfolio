import React from 'react'
import './Skill.css'
import Technology from './Technology'
import AdditionalSkill from './AdditionalSkill'
import Fade from 'react-reveal/Fade';


function Skill() {
  return (
    <>
    <Fade Left duration={1500}>
  
    <div className='skill-area'>
     <h1>Technologies</h1>
   </div>
   </Fade>

<div className='tec'>
  <Fade Left duration={1500}>
      <Technology skill='React js ' level='Beginner' active={true}/>
      <Technology skill='HTML' level='Advanced'/>
      <Technology skill='Css ' level='Advanced'/>
      <Technology skill='Tailwind & Boostrap ' level='Regular' active={true}/>
      <Technology skill='illustrator ' level='Regular' active={true}/>
      <Technology skill='Photoshop ' level='Regular' active={true}/>
      </Fade>
</div>
      
    <AdditionalSkill/>

   </>
  )
}

export default Skill