import { SET_LOADING, GET_POSTS } from "./BlogState";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        loading: false,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
