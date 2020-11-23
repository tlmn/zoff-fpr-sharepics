import Checkbox from "../../components/inputs/checkbox";
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
        <label htmlFor="data.background.color" className="label--inline">
          Farbe wählen
        </label>
        <ColorSelector
          state={state}
          setState={setState}
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-2">
        <Textarea
          state={state}
          setState={setState}
          propertyPath="data.body.content"
          label="Text"
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

      <div className="col-span-1 col-start-1">
        <Input
          state={state}
          setState={setState}
          propertyPath="data.author.content"
          label="Autor:in"
        />
      </div>
      
      <div className="col-span-2">
        <Checkbox
          propertyPath="data.logo.show"
          state={state}
          setState={setState}
          label="Logo anzeigen"
        />
      </div>

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
    </>
  );
};
