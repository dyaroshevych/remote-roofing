import React from "react";

import { Navigation, Header, HowItWorks, Services } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HowItWorks />
      <Services />
    </div>
  );
}

export default App;
