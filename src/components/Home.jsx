import React, { useState } from 'react'
import light_theme from "../assets/star.svg"
import dark_theme from "../assets/star1.svg"
import bg_image from "../assets/bg-image.jpg"
import insta_logo from "../assets/Instagram.svg"
import linkedin_logo from "../assets/linkedin.svg"
import whatsapp_logo from "../assets/whatsapp.svg"
import phone_call_icon from "../assets/phone-call.svg"
import email_icon from "../assets/envelope.svg"
import photo from "../assets/myProfilePhoto.jpg"
import cardImage from "../assets/card_image.jpg"

import Navbar from './Navbar'
import MainSection from './MainSection'
import "./home.css"

const Home = ({bgColor,setBgColor}) => {
  //  const [iconColor,setIconColor]=useState("white");
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
      {/* <Navbar setBgColor={setBgColor} setTextColor={setTextColor} setTheme={setTheme} theme={theme}/>
      <MainSection /> */}
      <div className='home-section' style={{backgroundColor:`${bgColor}`}}>
         <Navbar bgColor={bgColor} setBgColor={setBgColor}/>
         <MainSection/>
         {/* <About/> */}
          <div className='about1'>
             <span className="about-heading1 text-3xl font-bold">About Section</span><br/><hr/><hr/><hr/><hr/>
             
                   <div className="about-section1">
                   <div id="about-me1">
                   Hi, I'm Sanjeev kumar jha, a B.Tech student with a strong passion for technology and innovation. I started my journey in tech as a web developer, building responsive and interactive websites using HTML, CSS, JavaScript, and React. Over time, my interest has expanded into the exciting world of Artificial Intelligence, and I am now actively transitioning into the AI field learning about machine learning, data science, and neural networks. I'm enthusiastic about combining my web development skills with AI to create smarter, more dynamic applications.
                   
                   </div>
                   <div className='card-section1 flex flex-col gap-y-2'>
                     <img className="card-img1" src={cardImage}/>
                     <h2 className='mx-2.5 my-2 text-blue-700'>Sanjeev kumar jha</h2>
                     <div className='card-desc1 flex gap-3.5 m-2'>
                     <img className="logo1 mx-2" src={photo}/> 
                         <div className='text-blue-700'>
                            <div>B.tech</div>
                            <div>2nd year student </div>
                         </div>
                      </div>
                    </div>
                   </div>
               </div>   
         {/* <Skills/> */}
         <div className='skills1'>
      <div id="skill-section1">
      <span className='skill-heading1 font-bold text-3xl'>Skills</span><hr/><hr/><hr/><hr/>
      <div>
      <ul className='skill-list1'>
        <li>Html</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Programming languages known: C/C++,python,java</li>
      </ul>
      </div>
      </div>
              </div>
         {/* <Contact/> */}
         <div className="contact1">
            <span className="contact-heading1 text-3xl font-bold">Contact Details</span>
               <hr/><hr/><hr/><hr/><hr/>
                <div className='flex flex-col my-7 text-blue-500'>
                  <div className='phone1 flex flex-row gap-x-4'><img className="contact-logo1" src={phone_call_icon}/>
                  <a href="tel+919310147090">contact me</a>
                  </div>
                  <br/>
               
                 <div className='email1 flex flex-row gap-x-4'>
                  <img className='contact-logo1' src={email_icon}/> 
                 <a href="mailto:skjha9205@gmail.com">skjha9205@gmail.com</a></div> 
                 </div>
          </div>
          <div className="w-screen text-white p-2" style={{textAlign:"center"}}>Copyright © 2025 Mywebsite.All rights reserved</div>
    </div>
     
  </>
  );
    }


export default Home
