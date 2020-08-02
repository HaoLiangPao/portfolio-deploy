import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Routes
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import MemoryCard from "./components/pages/Memorycard";

// SmallProjects
import FormValidator from "./components/SmallProjects/Demos/01_form_validator/v1/01_form_validator";
import MovieSeatBooking from "./components/SmallProjects/Demos/02_movie_seat_booking/v3/02_movie_seat_booking";
import InfinitePagenation from "./components/SmallProjects/Demos/11_infinite_pagenation/11_infinite_pagenation";
import HackerNews from "./components/SmallProjects/21_hacker_news/21_hacker_news";

const App = () => {
  const demos = [
    {
      id: 1,
      path: "/demos/01_form_validator",
      component: FormValidator,
    },
    {
      id: 2,
      path: "/demos/02_movie_seat_booking",
      component: MovieSeatBooking,
    },
    {
      id: 11,
      path: "/demos/11_infinite_pagenation",
      component: InfinitePagenation,
    },
    {
      id: 21,
      path: "/demos/21_hacker_news",
      component: HackerNews,
    },
  ];

  // Use fontawsome CDN icons
  useEffect(() => {
    const fontawesome = document.createElement("script");
    fontawesome.async = true;
    fontawesome.src = "https://kit.fontawesome.com/2cab8469a5.js";
    document.body.appendChild(fontawesome);

    // Clean up the hook
    return () => {
      document.body.removeChild();
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/projects' component={Projects}></Route>
          <Route exact path='/memorycard' component={MemoryCard}></Route>

          {/* Small Project Endpoints */}
          {demos.map((demo) => (
            <Route
              exact
              key={demo.id}
              path={demo.path}
              component={demo.component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
