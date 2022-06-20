import React, { useRef, useState } from "react";

import { colorsUpdated } from "../../../config/vars";
import { getAvailableSecondaryColors } from "../../../lib/lib";
import Controls from "../../../templates/text/controls";
import Template from "../../../templates/text/template";
import TemplateContext from "../../../components/templateContext";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      body: {
        content:
        "Frauen sind die {Superheldinnen des Alltags}: Super Mutter, super Arbeits-kraft, super gesund, super jung und schön, super Freundin oder Ehefrau – super gestresst! Die Superheldinnen sind am Limit.",
        scale: { value: 45, range: [30, 80] },
      },
      background: {
        color: "purple",
        availableColors: colorsUpdated.map(x => x.label),
      },
      text: {
        color: getAvailableSecondaryColors("purple")[0].label,
        availableColors: getAvailableSecondaryColors("purple")
      },
      highlight: {
        active: "background",
        availableHighlights: ["underline", "background"]
      }
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
