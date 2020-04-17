import React from "react";

import { Header, Services, TypesOfDamage, Residential } from "../sections";

const CommercialPage = () => (
  <>
    <Header
      title="Commercial Roofing"
      subText={["Let Remote Roofing help you."]}
    />
    <Residential />
    <Services />
    <TypesOfDamage />
  </>
);

export default CommercialPage;
