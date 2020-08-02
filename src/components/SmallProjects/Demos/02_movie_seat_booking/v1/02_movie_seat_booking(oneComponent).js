import React, { Fragment, useState } from "react";

import Header from "../../../../layout/Header";
import Footer from "../../../../layout/Footer";

const MovieSeatBooking = () => {
  console.log("component redered");
  // Available movies
  const movieList = ["Avengers: Endgame", "Jocker", "Onward", "InsideOut"];
  // Default seats
  const [seats, setSeats] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ]);
  // console.log(seats);

  // problem: why cant I use [...seats] in this case?

  // Seats list, which updates the state when order submit
  const [orderSeats, setOrderSeats] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ]);
  // console.log(orderSeats);

  // Default movie
  const [movie, setMovie] = useState({
    price: 10,
    title: "Avengers: Endgame ($10)",
  });
  // Default order
  const [order, setOrder] = useState({
    count: 0,
    total: 0,
  });

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

  const handelMovieSelect = (e) => {
    console.log(seats);
    // Create a movie object based on the movie selected
    let currentMovie = {};
    currentMovie.price = e.target.value;
    currentMovie.title = movieList[e.target.selectedIndex];
    // Update the state
    setMovie(currentMovie);
    setSeats(seats);
    updateOrder("movieChanged");
  };

  const handelOrderSubmit = () => {
    // let currentSeats = [...orderSeats];
    let currentSeats = orderSeats.slice();
    // Update the virtual DOM
    setSeats(currentSeats);
  };

  return (
    <Fragment>
      <Header current='projects'></Header>
      <div id='project-02' className='project'>
        <div className='movie-container'>
          <label>Pick a monie:</label>
          <select id='movie' onChange={(e) => handelMovieSelect(e)}>
            <option value='10'>Avengers: Endgame ($10)</option>
            <option value='12'>Joker ($12)</option>
            <option value='8'>Onward ($8)</option>
            <option value='9'>Inside Out ($9)</option>
          </select>
        </div>

        {/* ShowCase */}
        <ul className='showcase'>
          <li>
            <div className='seat'></div>
            <small>N/A</small>
          </li>
          <li>
            <div className='seat selected'></div>
            <small>Selected</small>
          </li>
          <li>
            <div className='seat occupied'></div>
            <small>Occupied</small>
          </li>
        </ul>

        {/*  Screen & Seats  */}
        <div className='container'>
          <div className='screen'></div>
          {seats.map((row, rowIndex) => (
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

        {/* Order information */}
        <p className='text'>
          You have selected <span id='count'>{order.count}</span> seats for a
          price of $<span id='total'>{order.total}</span>
        </p>

        {/* Place the order */}
        <button onClick={(e) => handelOrderSubmit()}> Confirm </button>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default MovieSeatBooking;
