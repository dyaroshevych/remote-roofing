import React from "react";
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

const App = () => (
  <div className="App">
    <CovidWarning />
    <Router>
      <Route path="/">
        <Navigation />
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

export default App;
