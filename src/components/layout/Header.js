// Header includes Navbar and Showcase
import React from "react";
import Navbar from "./Navbar";
import Showcase from "../homeComponent/Showcase";

const Header = ({ current }) => {
  return (
    <header id={current === "home" ? "header-home" : "header-inner"}>
      <div className='container'>
        <Navbar current={current}></Navbar>
        {current === "home" && <Showcase></Showcase>}
      </div>
    </header>
  );
};

export default Header;
