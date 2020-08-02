// Include all actions
import React, { useReducer } from "react";
import BlogContext from "./BlogContext";
import BlogReducer from "./BlogReducer";

// Types of actions
export const SET_LOADING = "SET_LOADING";
export const GET_POSTS = "GET_POSTS";

// All actions goes here
const BlogState = (props) => {
  // -------- Helper Function ----------
  const initialState = {
    // Data source
    page: 1,
    limit: 3,
    posts: [],
    loading: false,
  };

  // -------- Actions ----------

  // Fetch posts data
  const getPosts = async (limit, page) => {
    // Show loading
    setLoading();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    console.log("fetched data:");
    console.log(data);
    dispatch({ type: GET_POSTS, payload: data });
  };

  // Update loading status
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  return (
    <BlogContext.Provider
      value={{
        page: state.page,
        limit: state.limit,
        posts: state.posts,
        loading: state.loading,
        getPosts,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
