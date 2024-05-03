import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";

import React from 'react'

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>


        <NavLink 
          to="/design" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Design
        </NavLink>


        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          About
        </NavLink>
        
      </ul>
    </nav>
  );
}
