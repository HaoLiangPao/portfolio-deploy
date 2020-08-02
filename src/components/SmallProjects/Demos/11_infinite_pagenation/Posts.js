import React, { useEffect, useContext, Fragment, useState } from "react";

import BlogContext from "./context/BlogContext";
import Loader from "./Loader";

const Posts = () => {
  console.log("Posts rendered");
  // Get context data
  const blogContext = useContext(BlogContext);
  const { posts, loading, page, limit, getPosts } = blogContext;

  console.log(blogContext);

  // Lifecycle functions
  useEffect(() => {
    // Fetch post data
    getPosts(limit, page);

    // Scrolling handler
    const handleScroll = () => {
      // Debug Testing
      // console.log(`handleScroll running: /page is ${page}`);
      // console.log(blogContext);

      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = document.documentElement;
      // console.log(`scrollTop is : ${scrollTop}`);
      // console.log(`scrollHeight is : ${scrollHeight}`);
      // console.log(`clientHeight is : ${clientHeight}`);

      // 80 is the height of footer
      if (scrollTop + clientHeight >= scrollHeight - 80) {
        setTimeout(() => {
          // Update the posts state (fetch data in next page)
          getPosts(limit, page);
        }, 3000);
      }
    };
    console.log("useEffect is called");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Clean Up the Listener");
      // window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div id='posts-container'>
        {/* Add all fetched posts here */}
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div className='post'>
              <div className='number'>{post.id}</div>
              <div className='post-info'>
                <h2 className='post-title'>{post.title}</h2>
                <p className='post-body'>{post.body}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Loader animation */}
      <Loader display={loading ? "loader show" : "loader"}></Loader>
    </Fragment>
  );
};

export default Posts;
