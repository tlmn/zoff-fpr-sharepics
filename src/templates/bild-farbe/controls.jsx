import React, { useContext } from "react";

import BgImage from "../../components/inputs/bgImage";
import ColorSelector from "../../components/inputs/colorSelector";
import TemplateContext from "../../templateContext";
/* eslint-disable jsx-a11y/no-onchange */
import { html2image } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);

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
            "thumbnail",
            600,
            480
          )
        }
      >
        Download
      </button>
    </>
  );
};
