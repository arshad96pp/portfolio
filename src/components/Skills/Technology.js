import React from 'react'
import './Technology.css'

function Technology({skill,level,active}) {
  return (
    <div className='technology'>
    <div className="flex-skill">
        <h2>{skill}</h2>
        <h5>{level}</h5>
    </div>

    <div className='rang-bg'>
    <div className={`${active===true? 'rangeactive':'range'}`}></div>
    </div>
    </div>
  )
}

export default Technology