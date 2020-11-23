/* eslint-disable jsx-a11y/no-onchange */
import { html2image, updateProperty } from "../../lib/lib";

import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";

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
      <div className="col-span-2">
        <Input
          state={state}
          setState={setState}
          label="Dachzeile"
          propertyPath="data.headline.content"
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
        <Textarea
          state={state}
          setState={setState}
          label="Text 2 &amp; Absender"
          propertyPath="data.subline.content"
          rows={3}
          className="w-full"
        />
      </div>
      <div className="col-span-2 col-start-1">
        <label htmlFor="data.logo.type" className="label--inline">
          Logo auswählen
        </label>
        <select
          id="data.logo.type"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.logo.type",
              e.target.value
            )
          }
          className="select-css"
        >
          <option value="FPR">FPR</option>
          <option value="NbF">NbF</option>
          <option value="none">keins</option>
        </select>
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
