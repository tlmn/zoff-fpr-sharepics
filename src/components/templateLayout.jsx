import React from "react";
import { getProperty } from "../lib/lib";

export default ({ state, children, isThumbnail = false }) => (
  <div className="col-span-6 relative">
    <div
      className={`${
        isThumbnail === false ? `template` : `template--thumbnail`
      } ${!state.templateScale.isScaled && `relative`}`}
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
