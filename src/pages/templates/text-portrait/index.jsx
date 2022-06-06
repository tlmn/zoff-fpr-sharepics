import React, { useRef, useState } from "react";

import { colorsUpdated } from "../../../config/vars";
import { getAvailableSecondaryColors } from "../../../lib/lib";
import Controls from "../../../templates/text-portrait/controls";
import Template from "../../../templates/text-portrait/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      body: {
        content:
        "Frauen sind die Superheldinnen des Alltags: Super Mutter, super Arbeits-kraft, super gesund, super jung und schön, super Freundin oder Ehefrau – super gestresst! Die Superheldinnen sind am Limit.",
        scale: { value: 50, range: [44, 80] },
      },
      subline: {
        content: "Hier steht ein Zusatz",
        scale: { value: 30, range: [30, 50] },
      },
      background: {
        color: "purple",
        availableColors: colorsUpdated.map(x => x.label),
      },
      logo: {
        label: "fprBlack",
        type: "FPR"
      },
      text: {
        color: getAvailableSecondaryColors("purple")[0].label,
        availableColors: getAvailableSecondaryColors("purple")
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
