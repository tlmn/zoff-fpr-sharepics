import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../../templateContext";

export default ({ propertyPath, label }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
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
};
