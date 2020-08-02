import { combineReducers } from "redux";
import projects from "./projectReducer";
import home from "./homeReducer";
import typewritter from "./typewriterReducer";
import about from "./aboutReducer";
// import navbar from "./navbarReducer";

export default combineReducers({
  projects,
  home,
  typewritter,
  about,
  // navbar,
});
