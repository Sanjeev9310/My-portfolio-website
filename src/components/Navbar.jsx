import React, { useState,useRef } from 'react'
import { Link } from 'react-router'
import light_theme from "../assets/star.svg"
import dark_theme from "../assets/star1.svg"
import "./navbar.css"
const Navbar = ({bgColor,setBgColor}) =>{
  const [iconColor,setIconColor]=useState("white");
  const [theme,setTheme]=useState(`${dark_theme}`)
  function handleClick(){
      if(theme===light_theme){
       setTheme(`${dark_theme}`);
       setBgColor("#0b152d");
       setIconColor("white");
}
      else{
       setTheme(`${light_theme}`);
       setBgColor("#fafafa");
       setIconColor("white");
      
}
  }
  return (
    <>
    <div className="nav-bar m-0 p-0" style={{backgroundColor:`${bgColor}`}}>
      <div className="nav-section">
       <div className="para">Sanjeev kumar jha</div>
           <div className='nav-list'>
             <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/About" >About</Link></li>
              <li><Link to="/Skills" >Skills</Link></li>
              <li><Link to="/Contact" >Contact</Link></li>
              <li>
                <img onClick={handleClick} className="theme-logo size-5 my-1.5" src={`${theme}`}
                style={{backgroundColor:`${iconColor}`}}/> 
              </li>
             </ul>
           </div>
       </div>       
    </div>
    </>
  )
}

export default Navbar
