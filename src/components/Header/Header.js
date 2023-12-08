import React, { useState } from 'react'
import './Header.css'

function Header() {
    const [state,setState]=useState(false)
  return (
    <header>
        <div className="logo">
            <h1>Portfolio</h1>
        </div>

        <div className={`nav-list ${state===false? '':'active'}`}>
            <ul>
                <li>Projects</li>
                <li>Technologyes</li>
                <li>About me</li>
            </ul>
        </div>

        <div className="fine-me">
            <h5><i class="fa-brands fa-linkedin"></i></h5>
            <h5><i class="fa-brands fa-square-instagram"></i></h5>
            <h5><i class="fa-brands fa-square-github"></i></h5>
            <a className='menu' onClick={()=>setState(!state)}><i class="fa-solid fa-bars"></i> </a>
            {console.log(state)}
        </div>
    </header>
  )
}

export default Header