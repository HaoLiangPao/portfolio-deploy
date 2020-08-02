import React from "react";
import PropTypes from "prop-types";

const Order = ({ count, total }) => {
  console.log("order rendered");
  return (
    <div>
      {/* Order information */}
      <p className='text'>
        You have selected <span id='count'>{count}</span> seats for a price of $
        <span id='total'>{total}</span>
      </p>
    </div>
  );
};

Order.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Order;
