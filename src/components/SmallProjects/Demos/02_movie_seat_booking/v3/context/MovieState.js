// Include all actions
import React, { useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import { deepCopy, shuffle } from "../../../../../../utils/helpFunctions";

// Types of actions
export const CONFIRM_ORDER = "CONFIRM_ORDER";
export const SELECT_SEAT = "SELECT_SEAT";
export const MOVIE_CHANGE = "MOVIE_CHANGE";
export const ORDER_UPDATE = "ORDER_UPDATE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

// All actions goes here
const MovieState = (props) => {
  // -------- Helper Function ----------
  const generateDefaultSeats = (rowLength, columnLength, occupied) => {
    // Generate a 1-dimentional matrix with 0
    let resultTemplate = new Array(rowLength * columnLength).fill(0);
    // Fill first 'occupied' number of seats with 1
    for (let index = 0; index < occupied; index++) {
      resultTemplate[index] = 1;
    }
    // Shuffle the array
    resultTemplate = shuffle(resultTemplate);
    // Generate the row * column matrix
    let result = [],
      row = [],
      valueIndex = 0,
      rowIndex = 0,
      columnIndex = 0;
    while (rowIndex < rowLength) {
      while (columnIndex < columnLength) {
        row.push(resultTemplate[valueIndex]);
        valueIndex++;
        columnIndex++;
      }
      columnIndex = 0;
      result.push(row);
      row = [];
      rowIndex++;
    }
    return result;
  };
  const defaultSeatsGenerated = generateDefaultSeats(6, 8, 30);

  const initialState = {
    showModal: false,
    movieList: [
      {
        price: 10,
        title: "Avengers: Endgame ($10)",
        occupied: 30,
      },
      {
        price: 12,
        title: "Jocker ($12)",
        occupied: 15,
      },
      {
        price: 8,
        title: "Onward ($8)",
        occupied: 10,
      },
      {
        price: 7,
        title: "InsideOut ($7)",
        occupied: 3,
      },
    ], // Available movies
    order: { count: 0, total: 0, confirm: false }, // Order status
    seats: defaultSeatsGenerated, // Default seats
    orderSeats: deepCopy(defaultSeatsGenerated), // Current seats for this order
    movie: { price: 10, title: "Avengers: Endgame ($10)" }, // Movie status
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Deconstructure some data
  const { movieList, orderSeats } = state;

  // -------- Actions ----------
  // Movie switch
  const handelMovieSelect = (e) => {
    dispatch({
      type: MOVIE_CHANGE,
      payload: {
        movie: movieList[e.target.selectedIndex],
        defaultSeats: generateDefaultSeats(
          6,
          8,
          movieList[e.target.selectedIndex].occupied
        ),
      },
    });
  };

  // Order implementation
  const updateOrder = (option, order, price) => {
    let { count, total } = order;
    switch (option) {
      case "increment":
        count++;
        total += price;
        break;
      case "decrement":
        count--;
        total -= price;
        break;
      case "movieChanged":
        count = 0;
        total = 0;
        break;
      default:
        break;
    }
    dispatch({
      type: ORDER_UPDATE,
      payload: {
        count,
        total,
        confirm: false,
      },
    });
  };

  // Just Change the UI, no state changes and no rerendering of components
  const handelSeatClick = (e, columnIndex, rowIndex, order, movie) => {
    // Mutate a copy of original seats
    if (orderSeats[rowIndex][columnIndex] === 0) {
      // Select
      orderSeats[rowIndex][columnIndex] = 1;
      e.target.className = "seat selected";
      updateOrder("increment", order, parseInt(movie.price));
    } else {
      // Deselect
      orderSeats[rowIndex][columnIndex] = 0;
      e.target.className = "seat";
      updateOrder("decrement", order, parseInt(movie.price));
    }
    dispatch({
      type: SELECT_SEAT,
      payload: orderSeats,
    });
  };

  // Order confirmation
  const confirmOrder = () => {
    // Show the Modal
    toggolModal();
    dispatch({ type: CONFIRM_ORDER });
  };

  // Toggol modal display
  const toggolModal = () => {
    let show;
    if (state.showModal) {
      show = false;
    } else {
      show = true;
    }
    dispatch({ type: TOGGLE_MODAL, payload: show });
  };

  return (
    <MovieContext.Provider
      value={{
        movieList: state.movieList,
        order: state.order,
        seats: state.seats,
        movie: state.movie,
        showModal: state.showModal,
        handelSeatClick,
        handelMovieSelect,
        confirmOrder,
        toggolModal,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
