import React, { useLayoutEffect, useState, useRef, Fragment } from "react";
import PropTypes from "prop-types";

const TimelineItem = ({ id, title, category, content, img, link }) => {
  // Hide the timeline items by default
  const [showStatus, setStatus] = useState("hide");
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  // Create an instance for experience section
  const timelineItem = useRef();
  // Control the rate of eventlister for resizing
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }
  // View checking
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (dimensions.height || document.documentElement.clientHeight) &&
      rect.right <= (dimensions.width || document.documentElement.clientWidth)
    );
  };
  // Change the css style for each item when: 1. scrolling; 2.initializing; 3.resizing
  useLayoutEffect(() => {
    // Validating process for show/hide satus
    if (isInViewport(timelineItem.current)) {
      setStatus("show");
    }
    // Handling methods
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);
    const debouncedHandleScrolling = debounce(function handleScrolling() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 250);

    // Add event listener
    window.addEventListener("resize", debouncedHandleResize);
    window.addEventListener("scroll", debouncedHandleScrolling);

    // Clean up hooks
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
      window.removeEventListener("scroll", debouncedHandleScrolling);
    };
  });

  const sectionRender = (title) => {
    switch (title) {
      case "2015: Python":
      case "2016: HTML/CSS, JS, PHP, SQL":
      case "2019: Ontario Ministry of Environment":
      case "2019: PowerChina (Fortune Global #161/500)":
        let result =
          link === undefined ? (
            <img src={img}></img>
          ) : (
            <a target='blank' href={link}>
              <img src={img}></img>
            </a>
          );
        console.log(result);
        return result;
      case "2016: U of T (Bioline Lab)":
      case "2019: React Native, Flask, SpringBoot, Agile":
      case "2020: React, Node.js, Express, MongoDB":
      case "2017: Kal-Polymers":
        return (
          <a target='blank' href={link}>
            <img className='bioline' src={img}></img>
          </a>
        );
      case "2018: SHAR.ED Inc.":
        return <img className='bioline' src={img}></img>;
      case "2015: GPA":
        return (
          <Fragment>
            <img src={img} href='https://www.utscgpa.com/'></img>
            <div className='gpa-links'>
              <a
                target='blank'
                href='https://www.facebook.com/GreenPathAssociation'
              >
                <i className='fab fa-facebook'></i>
              </a>
              <a
                target='blank'
                href='https://www.linkedin.com/company/utscgpa/?originalSubdomain=ca'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a target='blank' href='https://www.utscgpa.com/'>
                <i className='fas fa-pager'></i>
              </a>
            </div>
          </Fragment>
        );
      case "2016: Java, Git, OOP":
        return (
          <img src='https://forthebadge.com/images/badges/made-with-java.svg'></img>
        );
      case "2016: C":
        return (
          <a target='blank' href={link}>
            <img src='https://forthebadge.com/images/badges/made-with-c.svg'></img>
          </a>
        );
      default:
        break;
    }
  };

  return (
    <li ref={timelineItem} className={showStatus}>
      <div className={`card card--step${id}`}>
        <div className='head'>
          <div className='number-box'>
            <span>{id < 10 ? `0${id}` : id}</span>
          </div>
          <h2>
            <span className='small'>{category}</span> {title}
          </h2>
        </div>
        <div className='body'>
          {/* Paragraph of things */}
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {/* Customed Render section for each experience */}
          {sectionRender(title)}
        </div>
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
};

export default TimelineItem;
