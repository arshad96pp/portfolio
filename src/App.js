import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Project from './components/Project.js/Project'
import Skill from './components/Skills/Skill'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Project/>
      <Skill/>
      <Education/>
      <Contact/>
      
    </div>
  )
}

export default App