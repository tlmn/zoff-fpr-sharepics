import BgImage from "../../components/inputs/bgImage";
import ColorSelector from "../../components/inputs/colorSelector";
import React from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { html2image } from "../../lib/lib";

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
