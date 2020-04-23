import React from "react";
import AlgoliaPlaces from "algolia-places-react";

const FieldAddressInput = ({ className, id, placeholder }) => (
  <AlgoliaPlaces
    {...{ className, id, placeholder }}
    name="address"
    options={{
      appId: "pl0FDSAOXLGH",
      apiKey: "6f6e1961877c7ac0d0573e26d3a66e42",
      language: "en",
      countries: ["us"],
      type: "address",
    }}
  />
);

export default FieldAddressInput;
