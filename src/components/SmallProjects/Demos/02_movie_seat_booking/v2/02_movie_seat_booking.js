import React, { Fragment, useState } from "react";

import Header from "../../../../layout/Header";
import Footer from "../../../../layout/Footer";
import Seats from "./02_seats";

const MovieSeatBooking = () => {
  console.log("component redered");
  // Available movies
  const movieList = ["Avengers: Endgame", "Jocker", "Onward", "InsideOut"];
  // Default movie
  const [movie, setMovie] = useState({
    price: 10,
    title: "Avengers: Endgame ($10)",
  });
  const [confirm, setConfrim] = useState(false);

  const [defaultSeats, setDefaultSeats] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ]);

  const handelMovieSelect = (e) => {
    // Create a movie object based on the movie selected
    let currentMovie = {};
    currentMovie.price = e.target.value;
    currentMovie.title = movieList[e.target.selectedIndex];
    // Update the state
    setMovie(currentMovie);
    // Reset the confirm if an order has been placed
    setConfrim(false);
  };

  const receiveChildValue = (orderedSeats) => {
    // Update the default seats after purchased
    setDefaultSeats(orderedSeats);
    // Clear the purchase
    setConfrim(false);
  };

  return (
    <Fragment>
      <Header current='projects'></Header>
      <div id='project-02' className='project'>
        {/* Movie selector */}
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

        {/* Seats and Order information */}
        <Seats
          movie={movie}
          defaultSeats={defaultSeats}
          confirm={confirm}
          fromChildrenToParent={receiveChildValue}
        ></Seats>

        {/* Place the order */}
        <button onClick={(e) => setConfrim(true)}> Confirm </button>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default MovieSeatBooking;
