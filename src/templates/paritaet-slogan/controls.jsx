import React, { useContext } from "react";

import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import TemplateContext from "../../templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import { html2image } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2">
        <ColorSelector
          label="Farbe wählen"
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-1">
        <Textarea
          label="Text"
          propertyPath="data.body.content"
          rows={3}
          className="w-full"
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange propertyPath="data.body.scale" />
      </div>
      <div className="col-span-1">
        <Input
          label="Text 2 &amp; Absender"
          className="w-full"
          propertyPath="data.subline.content"
        />
      </div>
      <div className="col-span-1 col-start-1">
        <button
          className="btn btn-download"
          onClick={() =>
            html2image(
              {
                state,
                setState,
              },
              state.data.body.content
            )
          }
        >
          Download
        </button>
      </div>
    </>
  );
};
