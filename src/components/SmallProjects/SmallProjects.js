import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getDOMProjects } from "../../actions/projectActions";
import SmallProjectItem from "./SmallProjectItem";
import Preloader from "../layout/Preloader";

const SmallProjects = ({ projects, getDOMProjects }) => {
  useEffect(() => {
    console.log("userEffect hoot is runnning");
    getDOMProjects();
  }, []);

  console.log(projects);

  const { smallProjects, loading } = projects;

  console.log(smallProjects);
  console.log(loading);

  if (smallProjects === null || loading) {
    return <Preloader></Preloader>;
  }
  return (
    <section id='work-a' className='text-center py-3'>
      <div className='container'>
        <h2 className='section-title'>My Work</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Check out some of my projects</p>
        <div className='items'>
          {!loading && smallProjects.length === 0 ? (
            <p classNameName='center'>Loading projects</p>
          ) : (
            smallProjects.map((project) => (
              <SmallProjectItem
                project={project}
                key={project.id}
              ></SmallProjectItem>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

SmallProjects.propTypes = {
  projects: PropTypes.array.isRequired,
};

const mapStateToProp = (state) => {
  console.log(state);
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProp, { getDOMProjects })(SmallProjects);
