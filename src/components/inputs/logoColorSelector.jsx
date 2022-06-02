import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";
import { logosAndColors } from "../../config/vars";

export default ({ propertyPath, label = "" }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label htmlFor={propertyPath} className="label--inline">
        {label}
      </label>
      <select
        onChange={(e) =>
          updateProperty({ state, setState }, propertyPath, e.target.value)
        }
        value={getProperty({ state }, propertyPath)}
        id={propertyPath}
        className="select-css"
      >
        {logosAndColors.map(
          (item) =>
          <option value={item.label}>{item.name}</option>
        )}
        <option value="none">Ohne</option>
      </select>
    </>
  );
};
