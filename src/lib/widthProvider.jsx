import React, { useContext, useLayoutEffect, useRef } from "react";

import TemplateContext from "../templateContext";
import { updateProperty } from "./lib";

export default () => {
  const parentRef = useRef(null);
  const [state, setState] = useContext(TemplateContext);

  useLayoutEffect(() => {
    updateProperty(
      { state, setState },
      "data.templateScale.value",
      parentRef.current.scrollWidth / 1080
    );
  }, []);

  return <div className="col-start-6 col-span-6" ref={parentRef} />;
};
