import {
  GET_DOM_PROJECTS,
  GET_MERN_PROJECTS,
  PROJECTS_ERROR,
  SET_LOADING,
} from "./types";

import formValidator from "../resources/img/smallProjects/01_registerForm.png";
import movieTicketSelector from "../resources/img/smallProjects/02_movieTicketSelector.png";
import customVideoPlayer from "../resources/img/smallProjects/03_customVideoPlayer.png";
import currency_exchange_calculator from "../resources/img/smallProjects/04_currency_exchange_calculator.png";
import user_wealth_management from "../resources/img/smallProjects/05_user_wealth_management.png";
import menu_slider from "../resources/img/smallProjects/06_menu_slider.png";
import hangman_game from "../resources/img/smallProjects/07_hangman_game.png";
import meal_picker from "../resources/img/smallProjects/08_meal_picker.png";
import expense_tracker from "../resources/img/smallProjects/09_expense_tracker.png";
import music_player from "../resources/img/smallProjects/10_music_player.png";
import infinite_pagenation from "../resources/img/smallProjects/11_infinite_pagenation.png";
import typing_game from "../resources/img/smallProjects/12_typing_game.png";
import speech_text_reader from "../resources/img/smallProjects/13_speech_text_reader.png";
import memory_cards from "../resources/img/smallProjects/14_memory_cards.png";
import lyrics_search from "../resources/img/smallProjects/15_lyrics_search.png";
import relaxer from "../resources/img/smallProjects/16_relaxer.png";
import breakout_game from "../resources/img/smallProjects/17_breakout_game.png";
import new_year_countdown from "../resources/img/smallProjects/18_new_year_countdown.png";
import drag_drop_list from "../resources/img/smallProjects/19_drag_drop_list.png";

// Get all frameworkless projects
export const getDOMProjects = () => async (dispatch) => {
  try {
    console.log("get Dom projects");

    setLoading();

    // const res = await fetch("/projects");
    // const data = await res.json();

    // Dummy data for testing
    const domProjects = [
      {
        id: 2,
        title: "Movie Seat Booking",
        image: movieTicketSelector,
        category: "DOM & CSS, Local Storage",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/02_movie_seat_booking.html",
      },
      {
        id: 17,
        title: "Breakout Game",
        image: breakout_game,
        category: "HTML5 Canvas API",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/17_breakout_game.html",
      },
      {
        id: 7,
        title: "Hangman Game",
        image: hangman_game,
        category: "DOM, Events, SVG",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/07_hangman_game.html",
      },
      {
        id: 6,
        title: "Menu Slider & Modal",
        image: menu_slider,
        category: "UI/CSS/JS Animation",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/06_menu_slider.html",
      },
      {
        id: 8,
        title: "Meal Finder",
        image: meal_picker,
        category: "Fetch API, CSS Grid, Overlays",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/08_meal_picker.html",
      },
      {
        id: 13,
        title: "Speech Text Reader",
        image: speech_text_reader,
        category: "HTML5 Speech API",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/13_speech_text_reader.html",
      },
      {
        id: 18,
        title: "New Year Countdown",
        image: new_year_countdown,
        category: "DOM, Events, CSS, Time",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/18_new_year_countdown.html",
      },
      {
        id: 4,
        title: "Exchange Rate Calculator",
        image: currency_exchange_calculator,
        category: "Fetch API, JSON",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/04_currency_exchange_calculator.html",
      },
      {
        id: 12,
        title: "Typing Game",
        image: typing_game,
        category: "DOM, setInterval, Local Storage",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/12_typing_game.html",
      },
      {
        id: 10,
        title: "Music Player",
        image: music_player,
        category: "UI/Animation, Audio API",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/10_music_player.html",
      },
      {
        id: 3,
        title: "Video Player",
        image: customVideoPlayer,
        category: "HTML5 Video API",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/03_custom_video_player.html",
      },
      {
        id: 16,
        title: "Relaxer App",
        image: relaxer,
        category: "CSS Animations/Keyframes",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/16_relaxer.html",
      },
      {
        id: 8,
        title: "Expence Tracker",
        image: expense_tracker,
        category: "DOM, Array Methods, Local Storage",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/09_expense_tracker.html",
      },
      {
        id: 11,
        title: "Infinite Pagenation",
        image: infinite_pagenation,
        category: "CSS Loader, setTimeout, Async/Await",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/11_infinite_pagenation.html",
      },
      {
        id: 1,
        title: "Form Validation",
        image: formValidator,
        category: "DOM & events",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/01_form_validator.html",
      },
      {
        id: 19,
        title: "Guessing Richest",
        image: drag_drop_list,
        category: "Drag & Drop API",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/19_drag_drop_list.html",
      },
      {
        id: 15,
        title: "LyricsSearch App",
        image: lyrics_search,
        category: "Fetch, Async/Await, Pagination",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/15_lyrics_search.html",
      },
      {
        id: 5,
        title: "Wealth Management",
        image: user_wealth_management,
        category: "DOM & forEach(), map(), filter(), etc",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/05_user_wealth_management.html",
      },

      {
        id: 14,
        title: "Memory Cards",
        image: memory_cards,
        category: "CSS Animations, Local Storage",
        liveDemo:
          "https://lucid-colden-3e731e.netlify.app/pages/14_memory_cards.html",
      },
    ];

    dispatch({
      type: GET_DOM_PROJECTS,
      payload: domProjects,
    });
  } catch (error) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: error.response.statusText,
    });
  }
};
// Get all MERN projects
export const getMERNProjects = () => async (dispatch) => {
  try {
    console.log("get MERN projects");
    setLoading();

    // Dummy data for testing
    const mernProjects = [
      {
        id: 1,
        title: "Form Validator",
        image: formValidator,
        category: "useState, Events, RegEx",
        liveDemo: "/demos/01_form_validator",
      },
      {
        id: 2,
        title: "Movie Seat Booking",
        image: formValidator,
        category: "DOM & Local Storage",
        liveDemo: "/demos/02_movie_seat_booking",
      },
    ];

    dispatch({
      type: GET_MERN_PROJECTS,
      payload: mernProjects,
    });
  } catch (error) {
    dispatch({
      type: PROJECTS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
