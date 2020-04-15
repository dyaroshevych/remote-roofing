import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Navigation,
  Header,
  HowItWorks,
  Services,
  TypesOfDamage,
  Residential,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header
              title="Any Roof, Anywhere"
              subText={[
                "Roof inspections in seconds using satellite imagery.",
                "Let Remote Roofing help you.",
              ]}
            />
            <HowItWorks />
            <Services />
            <TypesOfDamage />
          </Route>
          <Route path="/residential">
            <Header title="Residential Roofing" />
            <Residential />
          </Route>
          <Route path="/commercial">
            <Header title="Coming soon!" />
          </Route>
          <Route path="/contact">
            <Header
              title="Get in touch with Remote Roofing"
              subText={[
                "Fill out the form and we'll be in touch as soon as possible.",
                "Our team is happy to answer your sales questions.",
              ]}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
