import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Order from "./02_order";

const Seats = ({ defaultSeats, movie, confirm, fromChildrenToParent }) => {
  // Default seats
  const [orderSeats, setOrderSeats] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ]);
  // Default order
  const [order, setOrder] = useState({
    count: 0,
    total: 0,
  });
  // Order implementation
  const updateOrder = (option) => {
    let { count, total } = order;
    switch (option) {
      case "increment":
        count++;
        total += parseInt(movie.price);
        setOrder({ count, total });
        break;
      case "decrement":
        count--;
        total -= parseInt(movie.price);
        setOrder({ count, total });
        break;
      case "movieChanged":
        count = 0;
        total = 0;
        setOrder({ count, total });
        break;
    }
  };

  // Conditional Rendering the seats component
  const RenderSeats = (confirm) => {
    let renderSeats;
    if (confirm) {
      console.log("use order seats");
      renderSeats = orderSeats;
      fromChildrenToParent(orderSeats);
    } else {
      console.log("use default seats");
      renderSeats = defaultSeats;
    }

    return (
      <div className='container'>
        <div className='screen'></div>
        {renderSeats.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((column, columnIndex) =>
              column === 0 ? (
                <div
                  key={columnIndex}
                  className='seat'
                  onClick={(e) => handelSeatClick(e, columnIndex, rowIndex)}
                ></div>
              ) : (
                <div className='seat occupied' key={columnIndex}></div>
              )
            )}
          </div>
        ))}
      </div>
    );
  };

  // Just Change the UI, no state changes and no rerendering of components
  const handelSeatClick = (e, columnIndex, rowIndex) => {
    // Mutate a copy of original seats
    if (orderSeats[rowIndex][columnIndex] === 0) {
      // Select
      orderSeats[rowIndex][columnIndex] = 1;
      e.target.className = "seat selected";
      updateOrder("increment");
    } else {
      // Deselect
      orderSeats[rowIndex][columnIndex] = 0;
      e.target.className = "seat";
      updateOrder("decrement");
    }
    // Update the orderSeats
    setOrderSeats(orderSeats);
  };

  return (
    <Fragment>
      {/* // Screen & Seats */}
      {RenderSeats(confirm)}
      {/* Order information */}
      <Order total={order.total} count={order.count}></Order>
    </Fragment>
  );
};

Seats.propTypes = {
  defaultSeats: PropTypes.array.isRequired,
  confirm: PropTypes.bool.isRequired,
  movie: PropTypes.object.isRequired,
  fromChildrenToParent: PropTypes.func.isRequired,
};

export default Seats;
