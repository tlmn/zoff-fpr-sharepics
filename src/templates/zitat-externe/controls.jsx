import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { html2image, updateProperty } from "../../lib/lib";

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
        <ColorSelector
          label="Farbe wählen"
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-2">
        <Input
          label="Dachzeile"
          propertyPath="data.headline.content"
        />
      </div>
      <div className="col-span-1">
        <Textarea
          label="Text"
          propertyPath="data.body.content"
          rows={3}
          className="w-full"
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange
          propertyPath="data.body.scale"
        />
      </div>
      <div className="col-span-1">
        <Textarea
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
