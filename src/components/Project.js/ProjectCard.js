import React from 'react'
import './ProjectCard.css'

function ProjectCard({imag,title,d}) {
  return (
    <div className='card-item'>
        
     
     <div className="card">
        <div className="card-box">
         <div className='card-bg'>
             <div className="image">

            <div className="img">

            <img src={imag} alt="" />
            </div>

             <div className="description">
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur, natus fuga eum qui vero, illum fugiat eius, nostrum possimus eveniet. Sed repellendus saepe nisi neque fugit. Ipsam, </p>

             </div>
             </div>


             <div className="btn">
               <button className='bttn1'>Live Preview</button>
               <button className='bttn2'>Check on GitHub</button>
             </div>


        </div>
        </div>
     </div>

    </div>
  )
}

export default ProjectCard