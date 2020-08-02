import React from "react";
import PropTypes from "prop-types";

const Modal = ({ handleClose, count, total, movie }) => {
  console.log("Modal rendered");
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  // console.log(showHideClassName);

  return (
    <div className='modal display-block'>
      <section className='modal-main'>
        <div>
          You have purchased <strong>{count}</strong> tickets of
          <strong> {movie.slice(0, movie.indexOf("("))}</strong>
        </div>
        <div>
          Please pay <strong>${total}</strong>
        </div>
        <button className='close' onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  // show: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  movie: PropTypes.string.isRequired,
};

export default Modal;
