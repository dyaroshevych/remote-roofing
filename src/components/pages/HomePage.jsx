import React from "react";

import { Header, HowItWorks, Services, AboutUs, Inspection } from "../sections";

const HomePage = () => (
  <>
    <Header
      title="Any Roof, Anywhere"
      subText={[
        "Roof inspections in seconds using satellite imagery.",
        "Let Remote Roofing help you.",
      ]}
    />
    <HowItWorks />
    <Services />
    <AboutUs />
    <Inspection />
  </>
);

export default HomePage;
