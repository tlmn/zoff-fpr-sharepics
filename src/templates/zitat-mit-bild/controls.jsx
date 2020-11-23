/* eslint-disable jsx-a11y/no-onchange */
import { html2image, updateProperty } from "../../lib/lib";

import BgImage from "../../components/inputs/bgImage";
import Checkbox from "../../components/inputs/checkbox";
import ColorSelector from "../../components/inputs/colorSelector";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";

export default ({ state, setState }) => {
  return (
    <>
      <div className="col-span-2">
        <BgImage state={state} setState={setState} currentSlide={0} />
      </div>
      <div className="col-span-2">
        <ColorSelector
          state={state}
          setState={setState}
          availableColors={state.data.overlay.availableColors}
          propertyPath="data.overlay.color"
          label="Farbe wählen"
        />
      </div>

      <div className="col-span-2">
        <Checkbox
          state={state}
          setState={setState}
          propertyPath="data.rectangle.show"
          label="Rechteck anzeigen"
        />
      </div>
      <div className="col-span-2 grid-2">
        <div className="col-span-1">
          <Textarea
            state={state}
            setState={setState}
            propertyPath="data.body.content[0]"
            label="Text 1 (Fett)"
            className="block w-full"
            rows={2}
          />
        </div>
        <div className="col-span-1">
          <Textarea
            state={state}
            setState={setState}
            propertyPath="data.body.content[0]"
            label="Text 1 (nicht fett)"
            className="block w-full"
            rows={2}
          />
        </div>
        <div className="col-span-1">
          <TextScaleRange
            state={state}
            setState={setState}
            propertyPath="data.body.scale"
          />
        </div>
        {!state.data.rectangle.show && (
          <div className="col-span-1">
            <ColorSelector
              state={state}
              setState={setState}
              availableColors={state.data.body.availableColors}
              propertyPath="data.body.color"
            />
          </div>
        )}
      </div>
      <div className="col-span-2">
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
          <option value="BFW">BFW</option>
          <option value="none">keins</option>
        </select>
      </div>
      {state.data.logo.type !== "none" && (
        <div className="col-span-2">
          <ColorSelector
            state={state}
            setState={setState}
            availableColors={state.data.logo.availableColors}
            propertyPath="data.logo.color"
            label="Logofarbe wählen"
          />
        </div>
      )}

      <button
        className="btn btn-download"
        onClick={() =>
          html2image(
            {
              state,
              setState,
            },
            state.data.body.content[0]
          )
        }
      >
        Download
      </button>
    </>
  );
};
