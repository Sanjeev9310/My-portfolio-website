import React from 'react'
import { Link } from "react-router"
import photo from "../assets/myProfilePhoto.jpg"
import cardImage from "../assets/card_image.jpg"
import left_arrow from "../assets/arrow-circle-left.svg"
import right_arrow from "../assets/arrow-circle-right.svg"
import "./about.css"
import Navbar from './Navbar'
const About = ({bgColor,setBgColor}) => {
  return (
    <>
    <div className='about' style={{backgroundColor:`${bgColor}`}}>
    <Navbar bgColor={bgColor} setBgColor={setBgColor}/>
    <div className="abt">
    <span className="about-heading text-3xl font-bold">About Section</span>
    <hr/><hr/><hr/><hr/>
    
          <div className="about-section">
                <div id="about-me">
                    Hi, I'm Sanjeev kumar jha, a B.Tech student with a strong passion for technology and innovation. I started my journey in tech as a web developer, building responsive and interactive websites using HTML, CSS, JavaScript, and React. Over time, my interest has expanded into the exciting world of Artificial Intelligence, and I am now actively transitioning into the AI field learning about machine learning, data science, and neural networks. I'm enthusiastic about combining my web development skills with AI to create smarter, more dynamic applications.
                </div>
                <div className='card-section flex flex-col gap-y-2'>
                    <img className="card-img" src={cardImage}/>
                    <h2 className='mx-2.5 my-2 text-blue-700'>Sanjeev kumar jha</h2>
                    <div className='card-desc flex gap-3.5 m-2'>
                        <img className="logo mx-2" src={photo}/> 
                        <div className='text-blue-700'>
                             <div>B.tech</div>
                             <div>2nd year student </div>
                        </div>
                    </div>
               </div>
          </div>
      </div>

      </div>   

    
    </>
   
  )
}

export default About
