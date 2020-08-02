import {
  CONFIRM_ORDER,
  MOVIE_CHANGE,
  SELECT_SEAT,
  ORDER_UPDATE,
  TOGGLE_MODAL,
} from "./MovieState";

import { deepCopy } from "../../../../../../utils/helpFunctions";

export default (state, action) => {
  switch (action.type) {
    case MOVIE_CHANGE:
      return {
        ...state,
        seats: action.payload.defaultSeats,
        orderSeats: deepCopy(action.payload.defaultSeats),
        movie: action.payload.movie,
        order: {
          count: 0,
          total: 0,
          confirm: false,
        },
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        seats: deepCopy(state.orderSeats),
        order: { ...state.order, confirm: true },
      };
    case SELECT_SEAT:
      return {
        ...state,
        orderSeats: action.payload,
      };
    case ORDER_UPDATE:
      return {
        ...state,
        order: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};
