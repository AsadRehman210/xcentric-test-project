import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/challenge1">
            Challenge 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/challenge2">
            Challenge 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
