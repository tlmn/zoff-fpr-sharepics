import React, { useRef, useState } from "react";

import Controls from "../../../templates/paritaet-zitat/controls";
import Template from "../../../templates/paritaet-zitat/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      headline: { content: "Konferenz" },
      body: {
        content: "Frauen in der Politik – von Parität keine Spur",
        scale: { value: 100, range: [80, 120] },
      },
      logo: { show: true },
      author: { content: "Euronews" },
      background: {
        color: "pariPink",
        availableColors: [
          "pariPink",
          "pariPetrol",
          "pariPurple",
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
