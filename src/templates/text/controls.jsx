import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import ColorsUpdatedSelector from "../../components/inputs/colorsUpdatedSelector";
import TemplateContext from "../../components/templateContext";
import TextScaleRange from "../../components/inputs/textScaleRange";
import Textarea from "../../components/inputs/textarea";
import { html2image, updateProperty } from "../../lib/lib";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2">
        <ColorsUpdatedSelector
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
          availableColorsPath="data.text.availableColors"
          textColorPath="data.text.color"
          label="Farbe wählen"
        />
      </div>
      <div className="col-span-2 my-3">
        <Textarea
          propertyPath="data.body.content"
          label="Text ({Hervorhebung})"
          className="w-full"
          rows={10}
        />
      </div>
      <div className="col-span-1">
        <TextScaleRange propertyPath="data.body.scale" />
      </div>

      <div className="col-span-1">
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

      <div className="col-span-2 my-3">
        <label htmlFor="data.highlight.active" className="label--inline">
          Highlight
        </label>

        <select
          id="data.highlight.active"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.highlight.active",
              e.target.value
            )
          }
          className="select-css"
        >
          <option value="underline">Unterstreichen</option>
          <option value="background">Markieren</option>
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
