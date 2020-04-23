import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HomePage,
  ResidentialPage,
  CommercialPage,
  ContactPage,
  LoginPage,
} from "./components/pages";
import { Navigation, Footer, CovidWarning } from "./components/sections";

import "./App.scss";

const App = () => {
  const [navigationFixed, setNavigationFixed] = useState(false);

  useEffect(() => {
    const warningHeight = document.querySelector("#covid-warning").offsetHeight;

    window.onscroll = debounce(() => {
      if (window.scrollY < warningHeight) {
        setNavigationFixed(false);
      } else if (window.scrollY >= warningHeight) {
        setNavigationFixed(true);
      }
    }, 20);
  }, []);

  return (
    <div className="App">
      <CovidWarning />
      <Router>
        <Route path="/">
          <Navigation isFixed={navigationFixed} />
        </Route>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/residential">
              <ResidentialPage />
            </Route>
            <Route path="/commercial">
              <CommercialPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
