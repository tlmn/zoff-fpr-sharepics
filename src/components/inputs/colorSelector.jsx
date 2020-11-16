import { getProperty, updateProperty } from "../../lib/lib";

import React from "react";
import { colors } from "../../config/vars";

export default ({ state, setState, propertyPath, availableColors = [] }) => (
  <select
    onChange={(e) =>
      updateProperty({ state, setState }, propertyPath, e.target.value)
    }
    value={getProperty({ state }, propertyPath)}
    id={propertyPath}
    className="select-css"
  >
    {colors.map(
      (color) =>
        availableColors.flat().includes(color.label) && (
          <option value={color.label}>{color.name}</option>
        )
    )}
  </select>
);
