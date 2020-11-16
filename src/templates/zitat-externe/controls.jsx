import { getProperty, html2image, updateProperty } from "../../lib/lib";

import ColorSelector from "../../components/inputs/colorSelector";
import React from "react";
import TextScaleRange from "../../components/inputs/textScaleRange";

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
        <label htmlFor="data.headline.content">Dachzeile</label>
        <input
          id="data.headline.content"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.headline.content",
              e.target.value
            )
          }
          value={getProperty({ state, setState }, "data.headline.content")}
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="data.body.content">Text</label>
        <textarea
          id="data.body.content"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.body.content",
              e.target.value
            )
          }
          rows={3}
          className="w-full"
        >
          {state.data.body.content}
        </textarea>
      </div>
      <div className="col-span-1">
        <TextScaleRange
          state={state}
          setState={setState}
          propertyPath="data.body.scale"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="data.subline.content">Text 2 &amp; Absender</label>
        <textarea
          id="data.subline.content"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.subline.content",
              e.target.value
            )
          }
        >
          {getProperty({ state, setState }, "data.subline.content")}
        </textarea>
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
