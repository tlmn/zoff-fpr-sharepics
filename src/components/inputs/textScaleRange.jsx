import React, { useContext } from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import TemplateContext from "../templateContext";

export default ({ propertyPath, optLabel }) => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <label htmlFor={propertyPath}>Textgröße {optLabel}</label>
      <input
        type="range"
        id={propertyPath}
        min={getProperty({ state }, `${propertyPath}.range[0]`)}
        max={getProperty({ state }, `${propertyPath}.range[1]`)}
        defaultValue={getProperty({ state }, `${propertyPath}.value` )}
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
