import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat-externe/controls";
import Template from "../../../templates/zitat-externe/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      headline: {
        content: "Gegen Femizide!",
      },
      body: {
        content: "Frauenmorde sind {kein} Familiendrama!",
        scale: { value: 80, range: [60, 100] },
      },
      subline: {
        content: "",
      },
      logo: {
        type: "FPR",
      },
      background: {
        color: "lightGreen",
        availableColors: ["lightGreen", "lightPurple", "orange"],
      },
    },
    ref: useRef(null),
    templateScale: { isScaled: true, value: 0 },
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateWrapper>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-6">
          <div className="grid-2">
            <Controls />
          </div>
        </div>
      </TemplateWrapper>
    </TemplateContext.Provider>
  );
};
