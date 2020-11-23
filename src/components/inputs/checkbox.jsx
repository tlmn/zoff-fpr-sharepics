import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label }) => (
  <>
    <label htmlFor={propertyPath} className="label--inline">
      {label}
    </label>
    <input
      type="checkbox"
      checked={getProperty({ state }, propertyPath)}
      id={propertyPath}
      onChange={() =>
        updateProperty(
          { state, setState },
          propertyPath,
          !getProperty({ state }, propertyPath)
        )
      }
    />
  </>
);
