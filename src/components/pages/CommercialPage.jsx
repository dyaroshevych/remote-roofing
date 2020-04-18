import React from "react";

import {
  Header,
  TypesOfDamage,
  Residential,
  Inspection,
  TypesOfRoofing,
} from "../sections";

const CommercialPage = () => (
  <>
    <Header
      title="Commercial Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <TypesOfRoofing />
    <TypesOfDamage />
    <Inspection />
  </>
);

export default CommercialPage;
