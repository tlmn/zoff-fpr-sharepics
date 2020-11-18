import { html2image, updateProperty } from "../../lib/lib";

import BgImage from "../../components/inputs/bgImage";
import ColorSelector from "../../components/inputs/colorSelector";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";

export default ({ state, setState }) => {
  return (
    <>
      <div className="col-span-2">
        <BgImage state={state} setState={setState} currentSlide={0} />
      </div>
      <div className="col-span-2">
        <label htmlFor="data.overlay.color" className="label--inline">
          Farbe wählen
        </label>
        <ColorSelector
          state={state}
          setState={setState}
          availableColors={state.data.overlay.availableColors}
          propertyPath="data.overlay.color"
        />
      </div>

      <div className="col-span-2">
        <label htmlFor="data.rectangle.show" className="label--inline">
          Rechteck anzeigen
        </label>
        <input
          type="checkbox"
          id="data.rectangle.show"
          checked={state.data.rectangle.show}
          onChange={() =>
            updateProperty(
              { state, setState },
              "data.rectangle.show",
              !state.data.rectangle.show
            )
          }
        />
      </div>
      <div className="col-span-2 grid-2">
        <div className="col-span-1">
          <label htmlFor="data.body.content[0]">Text 1 (Fett)</label>
          <textarea
            id="data.body.content[0]"
            onChange={(e) =>
              updateProperty(
                { state, setState },
                "data.body.content[0]",
                e.target.value
              )
            }
            className="block w-full"
            rows={2}
          >
            {state.data.body.content[0]}
          </textarea>
        </div>
        <div className="col-span-1">
          <label htmlFor="data.body.content[1]">Text 2 (nicht fett)</label>
          <textarea
            id="data.body.content[1]"
            onChange={(e) =>
              updateProperty(
                { state, setState },
                "data.body.content[1]",
                e.target.value
              )
            }
            className="block w-full"
            rows={2}
          >
            {state.data.body.content[1]}
          </textarea>
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
            <label htmlFor="data.body.color">Textfarbe wählen</label>
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
          <label htmlFor="data.logo.color" className="label--inline">
            Logofarbe wählen
          </label>
          <ColorSelector
            state={state}
            setState={setState}
            availableColors={state.data.logo.availableColors}
            propertyPath="data.logo.color"
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
