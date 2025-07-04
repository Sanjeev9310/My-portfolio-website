import React from 'react'
import "./skills.css"
import Navbar from './Navbar'


const Skills = ({bgColor,setBgColor}) => {
  return (
      <div className='skills' style={{backgroundColor:`${bgColor}`}}>
      <Navbar bgColor={bgColor} setBgColor={setBgColor}/>
      <div className="skill-section">
      <span className='skill-heading font-bold text-3xl'>Skills</span><hr/><hr/><hr/><hr/>
      <div>
      <ul className='skill-list'>
        <li>Html</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Programming languages known: C/C++,python,java</li>
      </ul>
      </div>
    </div>
   
    </div>
  )
}

export default Skills
