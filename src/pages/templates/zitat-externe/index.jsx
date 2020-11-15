import React, { useRef, useState } from "react";

import Controls from "../../../templates/zitat-externe/controls";
import Template from "../../../templates/zitat-externe/template";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    data: {
      headline: {
        content: "Gegen Femizide!",
      },
      body: {
        content: "Frauenmorde sind {kein} Familiendrama!",
        scale: { value: 80, range: [60, 100] },
      },
      subline: {
        content: "",
      },
      logo: {
        type: "FPR",
      },
      background: {
        color: "lightGreen",
        availableColors: ["lightGreen", "lightPurple"],
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
