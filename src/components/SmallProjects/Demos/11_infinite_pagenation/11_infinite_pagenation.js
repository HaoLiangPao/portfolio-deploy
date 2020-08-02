import React, { Fragment, useContext } from "react";

import ClassComponent from "./ClassComponent";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import Posts from "./Posts";

import BlogState from "./context/BlogState";
import BlogContext from "./context/BlogContext";

const InfinitePagenation = () => {
  console.log("infinite_pagenation rendered");

  // // Get context data
  // const blogContext = useContext(BlogContext);
  // const { posts, loading, page, limit, getPosts } = blogContext;

  return (
    <BlogState>
      <Fragment>
        <Header current='projects'></Header>
        <div id='project-11'>
          <h1>My Blog</h1>

          {/* Filter bar */}
          <div className='filter-container'>
            <input
              type='text'
              id='filter'
              className='filter'
              placeholder='Filter posts'
            />
          </div>
          {/* Post block */}
          <Posts></Posts>
          {/* Class Component Testing */}
          {/* <ClassComponent
                    // posts={posts}
          // loading={loading}
          // page={page}
          // limit={limit}
          // getPosts={getPosts}
          ></ClassComponent> */}
        </div>

        <Footer></Footer>
      </Fragment>
    </BlogState>
  );
};

export default InfinitePagenation;
