import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Section = ({ home: { skills, steps }, sectionType }) => {
  let leadMessage, sectionTitle, sectionId;
  switch (sectionType) {
    case "skill":
      leadMessage = "Full-stack development with React and NodeJS";
      sectionTitle = "I specialize in";
      sectionId = "home-skill";
      break;
    case "process":
      leadMessage = "I would like to share the way I do things:";
      sectionTitle = "Hope for the best, prepare for the worst";
      sectionId = "home-process";
      break;

    default:
      break;
  }

  const renderSection = () => {
    switch (sectionType) {
      case "skill":
        return (
          <div className='specials'>
            {skills.map((skill) => (
              <div key={skill.id}>
                <i className={skill.icon}> </i>
                <h3>{skill.name}</h3>
                <p>{skill.context}</p>
              </div>
            ))}
          </div>
        );
      case "process":
        return (
          <div className='process'>
            {steps.map((step) => (
              <div key={step.id}>
                <i className={step.icon}>
                  <div className='process-step'>{step.id}</div>
                </i>
                <h3>{step.name}</h3>
                <p>{step.context}</p>
              </div>
            ))}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <section id={sectionId} className='text-center py-2'>
      <div className='container'>
        <h2 className='section-title'>{sectionTitle} </h2>
        <div className='bottom-line'></div>
        <p className='lead'>{leadMessage} </p>
        {renderSection()}
      </div>
    </section>
  );
};

Section.propTypes = {
  home: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, null)(Section);
