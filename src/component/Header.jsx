import React from 'react'
import '../styles/header.css'
const Header = () => {
  return (
    <>
     
  <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
       logo
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div className="nav-links">
      <a href="#HOME">Home</a>
      <a href="#SKILLS">My Resume</a>
      <a href="#CNCT">About Us</a>
    </div>
  </div>
   
    </>
  )
}

export default Header