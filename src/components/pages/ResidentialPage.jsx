import React from "react";

import { Header, AboutUs, Residential, Inspection } from "../sections";

const ResidentialPage = () => (
  <>
    <Header
      title="Residential Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <AboutUs />
    <Inspection />
  </>
);

export default ResidentialPage;
