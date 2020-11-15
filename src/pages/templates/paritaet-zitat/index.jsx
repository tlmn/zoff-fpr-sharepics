import React, { useRef, useState } from "react";

import Controls from "../../../templates/paritaet-zitat/controls";
import Template from "../../../templates/paritaet-zitat/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    data: {
      headline: { content: "Konferenz" },
      body: {
        content: "Frauen in der Politik – von Parität keine Spur",
        scale: { value: 100, range: [80, 120] },
      },
      author: { content: "Euronews" },
      background: {
        color: "lightSalmon",
        availableColors: [
          "lightSalmon",
          "darkGreen",
          "turquoise",
          "salmon",
          "grayGreen",
        ],
      },
    },
    ref: useRef(null),
    templateScale: true,
  });

  return (
    <TemplateLayout>
      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-y-2">
          <Controls state={state} setState={setState} />
        </div>
      </div>
    </TemplateLayout>
  );
};
