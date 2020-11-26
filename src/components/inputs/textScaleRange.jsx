import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({ propertyPath }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
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
};
