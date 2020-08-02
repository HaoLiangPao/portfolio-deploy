import React from "react";
import PropTypes from "prop-types";

const Loader = ({ display }) => {
  return (
    <div className={display}>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
    </div>
  );
};

Loader.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Loader;
