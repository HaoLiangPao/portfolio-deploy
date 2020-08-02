import React, { useContext, Fragment } from "react";

import MovieContext from "./context/MovieContext";
import Modal from "./02_modal";

const Order = () => {
  console.log("order rendered");

  const movieContext = useContext(MovieContext);
  const {
    order: { count, total },
    movie,
    confirmOrder,
    showModal,
    toggolModal,
  } = movieContext;

  console.log(movieContext);

  return (
    <Fragment>
      {/* Order information */}
      <p className='text'>
        You have selected <span id='count'>{count}</span> seats for a price of $
        <span id='total'>{total}</span>
      </p>
      {/* Place the order */}
      <button onClick={(e) => confirmOrder()}> Confirm </button>
      {/* Model Notification */}
      {showModal && (
        <Modal
          handleClose={toggolModal}
          count={count}
          total={total}
          movie={movie.title}
        ></Modal>
      )}
    </Fragment>
  );
};

export default Order;
