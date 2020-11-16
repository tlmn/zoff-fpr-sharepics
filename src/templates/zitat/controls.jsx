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
      <div className="col-span-1 col-start-1">
        <label htmlFor="data.author.content">Autor:in</label>
        <input
          id="data.author.content"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.author.content",
              e.target.value
            )
          }
          value={getProperty({ state, setState }, "data.author.content")}
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="data.logo.show" className="label--inline">
          Logo anzeigen
        </label>
        <input
          type="checkbox"
          id="data.logo.show"
          checked={state.data.logo.show}
          onChange={() =>
            updateProperty(
              { state, setState },
              "data.logo.show",
              !state.data.logo.show
            )
          }
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
