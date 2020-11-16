import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat-mit-bild/controls";
import Template from "../../../templates/zitat-mit-bild/template";
import TemplateWrapper from "../../../components/templateWrapper";

export default () => {
  const [state, setState] = useState({
    data: {
      image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      body: {
        content: ["Super\nheldinnen", "Am Limit"],
        scale: { value: 60, range: [40, 80] },
        color: "white",
        availableColors: ["black", "white"],
      },
      rectangle: { show: true },
      logo: {
        show: true,
        color: "white",
        availableColors: ["black", "white"],
      },
      overlay: {
        color: "orange",
        availableColors: ["orange", "lightPurple", "green"],
      },
    },
    ref: useRef(null),
    templateScale: { isScaled: true, value: 0 },
  });

  return (
    <TemplateWrapper state={state} setState={setState}>
      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <div className="grid-2">
          <Controls state={state} setState={setState} />
        </div>
      </div>
    </TemplateWrapper>
  );
};
