import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Bio from "../aboutComponents/Bio";
import Timeline from "../aboutComponents/Timeline";

import PropTypes from "prop-types";

const About = ({ about }) => {
  return (
    <Fragment>
      <Header current='about'></Header>
      <Bio bio={about.bio}></Bio>
      <Timeline timelines={about.timelines}></Timeline>
      <Footer></Footer>
    </Fragment>
  );
};

About.propTypes = {
  about: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
  return {
    about: state.about,
  };
};

export default connect(mapStateToProp, null)(About);
