import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { html2image, updateProperty } from "../../lib/lib";

import BgImage from "../../components/inputs/bgImage";
import Checkbox from "../../components/inputs/checkbox";
import ColorSelector from "../../components/inputs/colorSelector";
import TemplateContext from "../../components/templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2">
        <BgImage currentSlide={0} />
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
