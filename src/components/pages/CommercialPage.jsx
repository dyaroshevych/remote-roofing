import React from "react";

import { Header, AboutUs, Residential, Inspection } from "../sections";

const CommercialPage = () => (
  <>
    <Header
      title="Commercial Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <AboutUs />
    <Inspection />
  </>
);

export default CommercialPage;
