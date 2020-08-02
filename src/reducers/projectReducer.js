import {
  GET_DOM_PROJECTS,
  SET_LOADING,
  PROJECTS_ERROR,
  GET_MERN_PROJECTS,
} from "../actions/types";

const initialState = {
  id: null,
  smallProjects: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_DOM_PROJECTS:
      return {
        ...state,
        loading: false,
        smallProjects: action.payload,
      };
    case GET_MERN_PROJECTS:
      return {
        ...state,
        loading: false,
        smallProjects: action.payload,
      };
    case PROJECTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
