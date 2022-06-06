import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import BgImage from "../../components/inputs/bgImage";
import ColorsUpdatedSelector from "../../components/inputs/colorsUpdatedSelector";
import TemplateContext from "../../components/templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import LogoAndColorSelector from "../../components/inputs/logoColorSelector";
import { html2image, updateProperty } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2 mb-3">
        <BgImage currentSlide={0} />
      </div>

      <div className="col-span-2">
         <ColorsUpdatedSelector
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
          availableColorsPath="data.text.availableColors"
          textColorPath="data.text.color"
          label="Farbe wählen"
        />
      </div>
      <div className="col-span-1 my-3">
        <Textarea
          propertyPath="data.body.content"
          label="Text 1"
          className="w-full"
          rows={4}
        />
      </div>
      <div className="col-span-1 my-3">
        <Textarea
          propertyPath="data.subline.content"
          label="Text 2"
          className="w-full"
          rows={4}
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange propertyPath="data.body.scale" optLabel="1" />
      </div>

      <div className="col-span-1">
        <TextScaleRange propertyPath="data.subline.scale" optLabel="2" />
      </div>

      <div className="col-span-1 mt-3">
        <label htmlFor="data.logo.type" className="label--inline">
          Textfarbe
        </label>

        <select
          id="data.text.color"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.text.color",
              e.target.value
            )
          }
          className="select-css"
        >
          {state.data.text.availableColors.map(
            (item) =>
            <option value={item.label}>{item.name}</option>
          )}
        </select>
      </div>

      <div className="col-span-1  mt-3">
        <LogoAndColorSelector
          propertyPath="data.logo.label"
          label="Logo wählen"
          filterByBGColor="true"
        />
      </div>

      <button
        className="btn btn-download mt-4"
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
