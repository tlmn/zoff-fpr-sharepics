import React, { useRef, useState } from "react";

import Controls from "../../../templates/paritaet-slogan/controls";
import Template from "../../../templates/paritaet-slogan/template";
import TemplateLayout from "../../../components/templateLayout";

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
