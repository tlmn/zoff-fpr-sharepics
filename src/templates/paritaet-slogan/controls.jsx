import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  return (
    <>
      <div className="col-span-2">
        <ColorSelector
          state={state}
          label="Farbe wählen"
          setState={setState}
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-1">
        <Textarea
          state={state}
          setState={setState}
          label="Text"
          propertyPath="data.body.content"
          rows={3}
          className="w-full"
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange
          state={state}
          setState={setState}
          propertyPath="data.body.scale"
        />
      </div>
      <div className="col-span-1">
        <Input
          state={state}
          setState={setState}
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
