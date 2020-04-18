import React from "react";

import {
  Header,
  TypesOfDamage,
  Residential,
  Inspection,
  TypesOfRoofing,
} from "../sections";

const ResidentialPage = () => (
  <>
    <Header
      title="Residential Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <TypesOfRoofing />
    <TypesOfDamage />
    <Inspection />
  </>
);

export default ResidentialPage;
