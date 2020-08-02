import React, { Fragment } from "react";
import PropTypes from "prop-types";
import TimelineItem from "./TimelineItem";

const Timeline = ({ timelines }) => {
  return (
    <Fragment>
      <section id='about-timeline'>
        <header id='main-header'>
          <div className='container'>
            <h1>
              <i className='fas fa-brain'></i> Timeline of my University Life
            </h1>
            <h3>
              <i className='fas fa-user'></i> Hao Liang
            </h3>
            <p>Please check my resume for more details</p>
          </div>
        </header>
        <ul>
          {timelines.map((timeline) => (
            <TimelineItem
              id={timeline.id}
              title={timeline.title}
              category={timeline.category}
              content={timeline.description}
              key={timeline.id}
              img={timeline.img}
              link={timeline.link}
            ></TimelineItem>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

Timeline.propTypes = {
  timelines: PropTypes.array.isRequired,
};

export default Timeline;
