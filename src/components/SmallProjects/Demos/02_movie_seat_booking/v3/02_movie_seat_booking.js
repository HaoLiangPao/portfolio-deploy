import React, { Fragment } from "react";

import Header from "../../../../layout/Header";
import Footer from "../../../../layout/Footer";
import MovieSelector from "./02_movie_selector";
import Seats from "./02_seats";
import Order from "./02_order";

import MovieState from "./context/MovieState";

const MovieSeatBooking = () => {
  console.log("component redered");

  return (
    <MovieState>
      <Fragment>
        <Header current='projects'></Header>
        <div id='project-02' className='project'>
          {/* Movie selector */}
          <MovieSelector></MovieSelector>

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
          <Seats></Seats>

          {/* Order information */}
          <Order></Order>
        </div>
        <Footer></Footer>
      </Fragment>
    </MovieState>
  );
};

export default MovieSeatBooking;
