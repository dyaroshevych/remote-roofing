import React from "react";

import {
  Navigation,
  Header,
  HowItWorks,
  Services,
  TypesOfDamage,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HowItWorks />
      <Services />
      <TypesOfDamage />
    </div>
  );
}

export default App;
