import React, { useRef, useState } from "react";

import Controls from "../../../templates/paritaet-slogan/controls";
import Template from "../../../templates/paritaet-slogan/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      body: {
        content: "Pari,\nPari!",
        scale: { value: 140, range: [120, 180] },
      },
      subline: {
        content: "www.brandenburg-paritätisch.de",
      },
      background: {
        color: "gradient",
        availableColors: ["gradient", "turquoise"],
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
