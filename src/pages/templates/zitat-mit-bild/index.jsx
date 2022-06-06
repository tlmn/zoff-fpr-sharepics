import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat-mit-bild/controls";
import Template from "../../../templates/zitat-mit-bild/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      body: {
        content: ["Super\nheldinnen", "Am Limit"],
        scale: { value: 60, range: [40, 80] },
        color: "black",
        availableColors: ["black", "white"],
      },
      rectangle: { show: false },
      logo: {
        show: true,
        type: "FPR",
        color: "black",
        availableColors: ["black", "white"],
      },
      overlay: {
        color: "green",
        availableColors: ["orange", "lightPurple", "green", "fprGrey"],
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
