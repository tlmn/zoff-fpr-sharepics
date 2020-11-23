import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath, label, ...props }) => (
  <>
    <label htmlFor={propertyPath}>{label}</label>
    <textarea
      id={propertyPath}
      onChange={(e) =>
        updateProperty({ state, setState }, propertyPath, e.target.value)
      }
      {...props}
    >
      {getProperty({ state }, propertyPath)}
    </textarea>
  </>
);
