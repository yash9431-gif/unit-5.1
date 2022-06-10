import React from 'react'
import './Projects.css'
import homedeput from "./Images/homedeput.png"
import dineout from "./Images/dineout.png"

// import github from "./Images/git.png"

const Project = () => {
  return (
      <div className='prmain'>
          <h1>PROJECTS</h1>
          <div className='card'>
        <div className='card1'>
          <h3>HOME DEPUT</h3>
          <img src={homedeput} alt="" />
          <p>Its an e-commerce commonly known as Home Depot, is the largest home improvement retailer in the United States</p>
          <p>
            <li>HTML</li>
            <li>CSS</li>
             <li>JAVA-SCRIPT</li>
          </p>
        </div>
        

          <div className='card1'>
          <h3>DINEOUT ClONE</h3>
          <img src={dineout} alt="" />
          <p>Its a clone of Dineout App and it provides users with exciting offers on a plethora of restaurants, exclusive discounts on buffets, complimentary dishes & a lot more</p>
          <p>
            <li>HTML</li>
            <li>CSS</li>
             <li>JAVA-SCRIPT</li>
          </p>
        </div>

        <div className='card1'>
          <h3>DINEOUT ClONE</h3>
          <img src={dineout} alt="" />
          <p>Its an e-commerce commonly known as Home Depot, is the largest home improvement retailer in the United States</p>
          <p>
            <li>HTML</li>
            <li>CSS</li>
             <li>JAVA-SCRIPT</li>
          </p>
        </div>

        
        

          </div>
    </div>
  )
}

export default Project