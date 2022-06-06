import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty, updateMultipleProperties } from "../../lib/lib";
import { getAvailableSecondaryColors } from "../../lib/lib";


import TemplateContext from "../templateContext";
import { colorsUpdated } from "../../config/vars";

export default ({ propertyPath, availableColors = [], label = "", availableColorsPath = "", textColorPath = ""}) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label htmlFor={propertyPath} className="label--inline">
        {label}
      </label>
      <select
        onChange={(e) =>
          //updateProperty({ state, setState }, propertyPath, e.target.value);
          updateMultipleProperties({ state, setState },
                                   [propertyPath, availableColorsPath, textColorPath],
                                   [e.target.value,
                                    getAvailableSecondaryColors(e.target.value),
                                    getAvailableSecondaryColors(e.target.value)[0].label])
        }
        value={getProperty({ state }, propertyPath)}
        id={propertyPath}
        className="select-css"
      >
        {colorsUpdated.map(
          (color) =>
            availableColors.flat().includes(color.label) && (
              <option value={color.label}>{color.name}</option>
            )
        )}
      </select>
    </>
  );
};
