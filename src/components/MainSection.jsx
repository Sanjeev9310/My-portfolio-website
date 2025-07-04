import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import myProfilePhoto from "../assets/myProfilePhoto.jpg"
import insta_logo from "../assets/Instagram.svg"
import linkedin_logo from "../assets/linkedin.svg"
import whatsapp_logo from "../assets/whatsapp.svg"

// import bgImage from "../assets/bg-image.jpg"
import "./MainSection.css"
import About from './About'

const MainSection = () => {
 
  // const desc="My name is sanjeev kumar jha and i am a"
  const [text,setText]=useState("");
  const fullText="Front end developer";

  useEffect(()=>{
     let index=0;
     const interval=setInterval(()=>{
        setText(prev=>prev+fullText[index++]);
        if(index===fullText.length-1){
          clearInterval(interval);
        }

      },200);
    return ()=>{
        clearInterval(interval);
      }
  },[]);
  const handleClick=(e)=>{
    const link=document.createElement("a");
    link.href="/Resume.pdf";
    link.download="Resume.pdf";
    link.click();
};

  return (
    <div className="main-section flex flex-row">
      <div id="desc">
        <div id="abt-me">Hi I'm<div id="name">Sanjeev kumar jha</div>{text}</div>
       
       <div className="icons-button">
        <div className='div-icons'>
            <ul className='icons'>
                  <li className='logo-icons'><a href="https://www.instagram.com/sanjeev_kashyap_9310/"><img className="logo" src={insta_logo}/></a></li>
                  <li className='logo-icons'><a href="https://www.linkedin.com/in/sanjeev-kumar-b09136274/"><img className="logo" src={linkedin_logo}/> </a></li>
                 <li className='logo-icons'><a href="https://wa.me/919310147090?text=Hi%20Sanjeev%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20connent%20with%20you"><img className="logo" src={whatsapp_logo}/></a></li>
                </ul>
        </div>
        <div className='btn'>
             <button id="btn-1" onClick={handleClick}>Download Resume</button>
        </div>
        </div>
        </div>
      
      <div><img className="my-image" src={myProfilePhoto}/></div>

      
    </div>
    
 )
}

export default MainSection
