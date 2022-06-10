import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
      <div style={{background:"Red",height:"50px",display:'flex',justifyContent:"space-evenly",marginTop:"0px"}}>
          
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
           <Link to='skills'>Skills</Link>
          <Link to='/contact'>Contact</Link>
          
    </div>
  )
}

export default Navbar