import { TYPE } from "../actions/types";

const initialState = {
  txt: "",
  wait: 1500,
  typeSpeed: 150,
  deleteSpeed: 100,
  words: ["Full-stack Developer", "New Grad", "Entrepreneur"],
  isDeleting: false,
  wordIndex: 0,
  speed: 150,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        wordIndex: action.payload.wordIndex,
        speed: action.payload.speed,
        isDeleting: action.payload.isDeleting,
        txt: action.payload.txt,
      };

    default:
      return state;
  }
};
