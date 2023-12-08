import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import Fade from 'react-reveal/Fade';
import ecome from '../assets/ecom.jpg';
import rest from '../assets/rest.jpg'
import port from '../assets/port.jpg'
import net from '../assets/net.jpg'




function Project() {
  return (
    <>
             <h1>Project</h1>

    <div className='card-flex'>
      <Fade Bottom  duration={1500}>
        <ProjectCard imag={rest} title='Restaurants Website' />
        <ProjectCard imag={port} title='Portfolio'/>
        <ProjectCard imag={ecome} title='E-commerce'/>
        <ProjectCard imag={net} title='Netflix Clone Using React'/>
        </Fade>
    </div>
    </>
  )
}

export default Project