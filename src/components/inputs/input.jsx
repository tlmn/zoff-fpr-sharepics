import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../../templateContext";

export default ({ propertyPath, label }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
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
};
