import React, { useContext } from "react";

import MovieContext from "./context/MovieContext";

const MovieSelector = () => {
  console.log("MovieSelector rendered");
  const movieContext = useContext(MovieContext);
  const { movieList, handelMovieSelect } = movieContext;

  return (
    // Movie selector
    <div className='movie-container'>
      <label>Pick a monie:</label>
      <select id='movie' onChange={(e) => handelMovieSelect(e)}>
        {movieList.map((movie, index) => (
          <option value={movie.price} key={index}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
