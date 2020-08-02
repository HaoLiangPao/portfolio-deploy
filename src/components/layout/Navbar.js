import React from "react";
import { Link } from "react-router-dom";

import logo from "../../resources/img/logo_dark_2.png"; // get logo image locally

const Navbar = ({ current }) => {
  return (
    <nav id='main-nav'>
      <img src={logo} alt='My Portfolio' id='logo' />

      <ul>
        <li>
          <Link to='/'>
            <p className={current === "home" ? "current" : ""}>Home</p>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <p className={current === "about" ? "current" : ""}>About</p>
          </Link>
        </li>
        {/* <li>
          <Link to='/memorycard'>
            <p className={current === "memorycard" ? "current" : ""}>
              MemoryCard
            </p>
          </Link>
        </li> */}
        <li>
          <Link to='/projects'>
            <p className={current === "projects" ? "current" : ""}>projects</p>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <p className={current === "contact" ? "current" : ""}>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
