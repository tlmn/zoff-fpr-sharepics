import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label }) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <input
      type="text"
      value={getProperty({ state }, propertyPath)}
      id={propertyPath}
      onChange={(e) =>
        updateProperty({ state, setState }, propertyPath, e.target.value)
      }
    />
  </>
);
