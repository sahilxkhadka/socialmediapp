import React from "react";
import './Navbar.css'

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-heading">
        <h1>Sahil Khadka</h1>
      </div>
      <div className="app__navbar-links">
        <ul className="app__navbar-links_menu-items">
          <NavLink to = "/" className= "app__navbar-links_menu-item" >Home</NavLink>
          <NavLink to = "/about" className= "app__navbar-links_menu-item" >About</NavLink>
          <NavLink to = "/contact" className= "app__navbar-links_menu-item" >Contact</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar