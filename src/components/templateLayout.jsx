import React from "react";
import { getProperty } from "../lib/lib";

export default ({ state, children }) => (
  <div className="col-span-6 relative">
    <div
      className={`template ${!state.templateScale.isScaled && `relative`}`}
      style={{
        transform:
          state.templateScale.isScaled &&
          `scale(${getProperty({ state }, "data.templateScale.value")})`,
        transformOrigin: "0 0",
      }}
      ref={state.ref}
    >
      {children}
    </div>
  </div>
);
