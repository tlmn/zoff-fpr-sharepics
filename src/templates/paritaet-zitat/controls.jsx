import Checkbox from "../../components/inputs/checkbox";
import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import { html2image } from "../../lib/lib";
import { set } from "lodash";

export default ({ state, setState }) => {
  return (
    <>
      <div className="col-span-2">
        <ColorSelector
          label="Farbe wählen"
          state={state}
          setState={setState}
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-1">
        <Input
          setState={setState}
          state={state}
          label="Dachzeile"
          propertyPath="data.headline.content"
          className="w-full"
        />
      </div>
      <div className="col-span-1 col-start-1">
        <Textarea
          setState={setState}
          state={state}
          label="Text"
          propertyPath="data.body.content"
          className="w-full"
          rows={3}
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
          setState={setState}
          state={state}
          label="Absender:in"
          propertyPath="data.author.content"
          className="w-full"
        />
      </div>
      <div className="col-span-2">
        <Checkbox
          state={state}
          setState={setState}
          propertyPath="data.logo.show"
          label="Logo anzeigen"
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
