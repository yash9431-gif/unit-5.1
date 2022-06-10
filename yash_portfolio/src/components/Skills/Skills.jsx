import React from 'react'
import "./skills.css"
import html from "./Images/html.png"
import css from "./Images/css.png"
import java from "./Images/java.jpg"
import nodejs from "./Images/nodejs.png"
import expressjs from "./Images/expressjs.png"
import react from "./Images/Rexat.png"
import Redux from "./Images/Redux_Logo.png"
import boot from "./Images/boot.jpg"

const Skills = () => {
  return (
      <div className='skills'>
          <h1>SKILLS</h1>
      <div className='logo'>
        <img src={html} alt="" />
        <img src={css} alt="" />
         <img src={java} alt="" />
        <img src={nodejs} alt="" />
        <img src={expressjs} alt="" />
        <img src={react} alt="" />
         <img src={Redux} alt="" />
        <img src={boot} alt="" />
         
      </div>
          
    
     
    </div>
  )
}

export default Skills