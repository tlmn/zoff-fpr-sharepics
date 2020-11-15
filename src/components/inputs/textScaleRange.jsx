import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";

export default ({ state, setState, propertyPath }) => (
  <>
    <label htmlFor={propertyPath}>Textgröße</label>
    <input
      type="range"
      id={propertyPath}
      min={getProperty({ state }, `${propertyPath}.range[0]`)}
      max={getProperty({ state }, `${propertyPath}.range[1]`)}
      defaultValue={getProperty({ state }, propertyPath)}
      className="w-full"
      onChange={(e) =>
        updateProperty(
          { state, setState },
          `${propertyPath}.value`,
          e.target.value
        )
      }
    />
  </>
);
