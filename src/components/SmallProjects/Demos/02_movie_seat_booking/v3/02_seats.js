import React, { Fragment, useContext } from "react";

import MovieContext from "./context/MovieContext";

const Seats = () => {
  console.log("Seats rendered");
  const movieContext = useContext(MovieContext);
  const { seats, movie, order, handelSeatClick } = movieContext;

  return (
    <Fragment>
      {/* // Screen & Seats */}
      <div className='container'>
        <div className='screen'></div>
        {seats.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((column, columnIndex) =>
              column === 0 ? (
                <div
                  key={columnIndex}
                  className='seat'
                  onClick={(e) =>
                    handelSeatClick(e, columnIndex, rowIndex, order, movie)
                  }
                ></div>
              ) : (
                <div className='seat occupied' key={columnIndex}></div>
              )
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Seats;
