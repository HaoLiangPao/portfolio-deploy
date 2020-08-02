import React from "react";
import spinner from "../../resources/img/spinner.gif";

const Preloader = () => {
  return (
    <section id='work-a' className='text-center py-3'>
      <div className='container'>
        <h2 className='section-title'>My Work</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Check out some of my projects</p>
        <img
          src={spinner}
          alt='Loading'
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </div>
    </section>
  );
};

export default Preloader;
