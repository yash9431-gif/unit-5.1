import React from 'react'
import "./Contact.css"
import phone from "./Images/phone icons.png"
import email from "./Images/emial.webp"
 import git from "./Images/git.png"
 import limk from "./Images/linkedin.png"

const Contact = () => {
  return (
    <div className='contactmain'>
      <div className='contactinfo'>
        <h3>You can find me here</h3>
        <div className='phone'>
          <img src={phone} alt="" />
           <p>---7004383651</p>
        </div>
       <div className='phone'>
          <img src={email} alt="" />
           <p>---7004383651</p>
        </div>
        <a href="https://github.com/yash9431-gif?tab=repositories">
          <img src={git} alt="" />
        </a>

         <a href="https://www.linkedin.com/in/yash-raj-926416174/">
          <img src={limk} alt="" />
        </a>
        
       
      </div>
      
          
    </div>
  )
}

export default Contact