import React from 'react'
import profilepic from "./Images/Yashimg.jpeg"
import linkedin from "./Images/linkedin.png"
import github from "./Images/git.png"


import './Home.css'


const Home = () => {
  return (
      <div className='homemain'>
      <img src={profilepic} alt="" className='p1' />
      <h1>Hi, I am <span className='name'>Yash Raj.</span></h1>
      <h3>A MERN Stack Web Developer.</h3>
      <div className='all-btn'>
        <a href='https://docs.google.com/document/d/1RfaUlG9CZ4xGUL7peuUURoG8-TvgWz_u5_MPNfCfRY4/edit' className='resume'>
            Resume</a>
     
         <a href='https://www.linkedin.com/in/yash-raj-926416174/' >
           <img src={linkedin} alt="" className='linkedin1' />
        </a>

        <a href='https://github.com/yash9431-gif' >
           <img src={github} alt="" className='linkedin1' />
        </a>
      </div>
      

      
    </div>
 
  )
}

export default Home