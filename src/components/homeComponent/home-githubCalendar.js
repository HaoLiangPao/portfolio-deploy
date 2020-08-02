import React, { useLayoutEffect, useRef } from "react";

const GitHubCalendar = require("../../scripts/github-source");

const Github = ({ githubOptions, user }) => {
  // Select the github calendar div to be changed
  const calendar = useRef();

  useLayoutEffect(() => {
    console.log(GitHubCalendar);
    GitHubCalendar(calendar, user, githubOptions);

    // Clean up the hook
    return () => {
      document.body.removeChild();
    };
  }, []);
  return (
    <div className='calendar' ref={calendar}>
      <img
        src='https://github.githubassets.com/images/spinners/octocat-spinner-128.gif'
        className='spinner'
      />
      Loading data just for you...
    </div>
  );
};

export default Github;
