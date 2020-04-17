import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import {
  HomePage,
  ResidentialPage,
  CommercialPage,
  ContactPage,
} from "./components/pages";
import { Navigation, Inspection } from "./components/sections";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Navigation />
        </Route>
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Inspection />
          </Route>
          <Route path="/residential">
            <ResidentialPage />
            <Inspection />
          </Route>
          <Route path="/commercial">
            <CommercialPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
