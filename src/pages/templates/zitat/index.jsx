import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat/controls";
import Template from "../../../templates/zitat/template";
import TemplateContext from "../../../templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      body: {
        content:
          "In einer feministischen Utopie kennen Menschenrechte keine Grenzen",
        scale: { value: 60, range: [50, 70] },
      },
      author: {
        content: "Heiderose Gerber",
      },
      background: {
        color: "lightGreen",
        availableColors: [
          "lightGreen",
          "green",
          "orange",
          "lightPurple",
          "darkPurple",
          "black",
          "gray",
        ],
      },
      logo: {
        show: true,
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
