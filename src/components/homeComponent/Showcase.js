import React from "react";
import Typewritter from "./Typewritter";

const Showcase = () => {
  return (
    <div className='header-content'>
      <h1>
        I Am Hao The
        <Typewritter></Typewritter>
      </h1>
      <p className='lead'>I specialized in full-stack development.</p>
      <a href='work.html' className='btn-light'>
        View My Work
      </a>
    </div>
  );
};

export default Showcase;
