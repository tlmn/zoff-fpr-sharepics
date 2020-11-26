import React, { useRef, useState } from "react";

import Controls from "../../../templates/bild-farbe/controls";
import Template from "../../../templates/bild-farbe/template";
import TemplateContext from "../../../templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      overlay: {
        color: "green",
        availableColors: [
          "orange",
          "green",
          "lightGreen",
          "lightPurple",
          "darkPurple",
          "gray",
          "transparent",
        ],
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
