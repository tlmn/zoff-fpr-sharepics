import React, { useContext } from "react";

import TemplateContext from "../templateContext";
import { getProperty } from "../lib/lib";

export default ({ children, isThumbnail = false }) => {
  const [state] = useContext(TemplateContext);
  return (
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
};
