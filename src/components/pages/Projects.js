import React, { Fragment } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SmallProjects from "../SmallProjects/SmallProjects";

const Projects = () => {
  return (
    <Fragment>
      <Header current='projects'></Header>
      <SmallProjects></SmallProjects>
      <Footer></Footer>
    </Fragment>
  );
};

export default Projects;
