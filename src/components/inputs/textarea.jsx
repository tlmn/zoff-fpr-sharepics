import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../../templateContext";

export default ({ propertyPath, label, ...props }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
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
};
