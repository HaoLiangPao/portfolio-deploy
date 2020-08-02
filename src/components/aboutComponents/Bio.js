import React, { useState } from "react";
import PropTypes from "prop-types";

import bioImg from "../../resources/img/about.png"; // get logo image locally
import Section from "../homeComponent/home-section";

const Bio = ({ bio }) => {
  console.log(bio);
  const [quote, setQuote] = useState(
    "Hope for the BEST, prepare for the WORST"
  );

  return (
    <>
      <div id='about-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            Let me tell you a little about myself and what I do ...
          </p>
          <div className='about-info'>
            <img src={bioImg} alt='My Bio' className='bio-image' />
            <div className='bio bg-light'>
              {bio.intros.map((intro) => (
                <div className='intro' key={intro.id}>
                  <h4>{intro.role}</h4>
                  <p>{intro.description}</p>
                </div>
              ))}
            </div>
            {bio.awards.map((award) => (
              <div className={`award-${award.id}`} key={award.id}>
                <i className='fas fa-award fa-3x'></i>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
          {/* @TODO: Can add a quote API to change the quote everytime access the page */}
          <div id='quote' className='text-center py-2'>
            <div className='container'>
              <h2 className='section-title'>{quote} </h2>
              <div className='bottom-line'></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Section sectionType='process'></Section> */}
    </>
  );
};

Bio.propTypes = {
  bio: PropTypes.object.isRequired,
};

export default Bio;
