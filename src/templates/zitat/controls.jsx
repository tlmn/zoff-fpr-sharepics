import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { updateProperty, html2image } from "../../lib/lib";

import ColorSelector from "../../components/inputs/colorSelector";
import Input from "../../components/inputs/input";
import TemplateContext from "../../components/templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2">
        <label htmlFor="data.background.color" className="label--inline">
          Farbe wählen
        </label>
        <ColorSelector
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-2">
        <Textarea
          propertyPath="data.body.content"
          label="Text"
          className="w-full"
          rows={3}
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange propertyPath="data.body.scale" />
      </div>

      <div className="col-span-1 col-start-1">
        <Input propertyPath="data.author.content" label="Autor:in" />
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
          <option value="Pari">Pari</option>
          <option value="Pfeil">Pfeil</option>
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
