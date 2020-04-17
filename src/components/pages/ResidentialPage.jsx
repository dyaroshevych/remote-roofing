import React from "react";

import { Header, Services, TypesOfDamage, Residential } from "../sections";

const ResidentialPage = () => (
  <>
    <Header
      title="Residential Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <Services />
    <TypesOfDamage />
  </>
);

export default ResidentialPage;
