import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  HomePage,
  ResidentialPage,
  CommercialPage,
  ContactPage,
  LoginPage,
} from "./components/pages";
import { Navigation, Footer } from "./components/sections";

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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
