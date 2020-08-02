import React, { Fragment } from "react";
import Header from "../layout/Header";
import Intro from "../homeComponent/Intro";
import Footer from "../layout/Footer";
// import Github from "../homeComponent/home-githubCalendar";

const Home = () => {
  // const githubOptions = {
  //   responsive: true,
  //   tootips: true,
  // };
  return (
    <Fragment>
      <Header current='home'></Header>
      {/* <Github user='bachdx2812' options={githubOptions}></Github> */}
      <Intro></Intro>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
