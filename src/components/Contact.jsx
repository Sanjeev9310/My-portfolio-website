import React from 'react'
import "./Contact.css"
import Navbar from './Navbar'
import phone_call_icon from "../assets/phone-call.svg"
import email_icon from "../assets/envelope.svg"

const Contact = ({bgColor,setBgColor}) => {
  return (
    <div className="contact-section" style={{backgroundColor:`${bgColor}`}}>
       <Navbar bgColor={bgColor} setBgColor={setBgColor}/>
          <div className='cnt-details'>
             <h2 className='heading '>Contact Details</h2>
             <hr/><hr/><hr/>
             <div className="cnt-icons flex flex-col">
                <div className='phone1 flex flex-row gap-x-4'>
                    <img className="logo" src={phone_call_icon}/>
                    <a href="tel+919310147090">contact me</a>
                </div>
                <div className='email1 flex flex-row gap-x-4'>
                    <img className='logo' src={email_icon}/> 
                    <a href="mailto:skjha9205@gmail.com">skjha9205@gmail.com</a>
                </div> 
             </div>
          </div>
    </div>

  )
}

export default Contact
