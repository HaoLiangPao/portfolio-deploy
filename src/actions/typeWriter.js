import { TYPE } from "./types";

export const type = (typewritter) => (dispatch) => {
  let {
    words,
    isDeleting,
    wait,
    typeSpeed,
    deleteSpeed,
    wordIndex,
    txt,
    speed,
  } = typewritter;

  // Current index of word
  const current = wordIndex % words.length;
  // Get full text of current word
  const fullTxt = words[current];

  // Check if deleting
  if (isDeleting) {
    // Remove char
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    // Add char
    txt = fullTxt.substring(0, txt.length + 1);
  }

  if (isDeleting) {
    speed = deleteSpeed;
  } else {
    speed = typeSpeed;
  }

  // If word is complete
  // Complete and isTyping
  if (!isDeleting && txt === fullTxt) {
    // Make pause at end
    speed = wait;
    // Set delete to true
    isDeleting = true;
    // Complete and isDeleting
  } else if (isDeleting && txt === "") {
    isDeleting = false;
    // Move to next word
    wordIndex++;
    // Pause before start typing
    speed = wait / 2;
  }

  // Return the state changes to reducer
  const stateChanges = {
    wordIndex,
    isDeleting,
    speed,
    txt,
  };

  dispatch({
    type: TYPE,
    payload: stateChanges,
  });
};
