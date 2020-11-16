import React, { useLayoutEffect, useRef } from "react";

import { updateProperty } from "./lib";

export default ({ state, setState }) => {
  const parentRef = useRef(null);

  useLayoutEffect(() => {
    updateProperty(
      { state, setState },
      "data.templateScale.value",
      parentRef.current.scrollWidth / 1080
    );
  }, [parentRef]);

  return <div className="col-start-6 col-span-6" ref={parentRef} />;
};
