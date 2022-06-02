import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
    const { isAuthorized, login, logout } = useContext(AuthContext)
   const{isLight,toggleTheme} = useContext(ThemeContext)
  return (
      <div>Navbar
          <button onClick={() => {
              if (isAuthorized) logout();
                 
              else login("R", "Z")
               console.log(isAuthorized)
          }}>
              {isAuthorized ? "Logout":"Login"}

          </button>
    
          <button onClick={toggleTheme}>{`Make ${isLight ? "Dark" :"Light"}`}</button>
         
          <Wishlist/>
    </div>
  )
}

export default Navbar