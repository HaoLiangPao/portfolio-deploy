import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { type } from "../../actions/typeWriter";

const Typewritter = ({ typewritter, type }) => {
  // Constantly run typewritter
  setTimeout(() => type(typewritter), typewritter.speed);

  return (
    <span className='txt-type'>
      <span className='txt'>{` ${typewritter.txt}`}</span>
    </span>
  );
};

Typewritter.propTypes = {
  typewritter: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    typewritter: state.typewritter,
  };
};
export default connect(mapStateToProp, { type })(Typewritter);
