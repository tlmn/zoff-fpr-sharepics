import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat/controls";
import Template from "../../../templates/zitat/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    data: {
      body: {
        content: "In einer feministischen Utopie kennen Menschenrechte keine Grenzen",
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
