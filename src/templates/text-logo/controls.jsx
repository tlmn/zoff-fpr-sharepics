import React, { useContext } from "react";

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
      <div className="col-span-2">
        <label htmlFor="data.background.color" className="label--inline">
          Farbe wählen
        </label>
        <ColorsUpdatedSelector
          availableColors={state.data.background.availableColors}
          propertyPath="data.background.color"
        />
      </div>
      <div className="col-span-1 my-3">
        <Textarea
          propertyPath="data.body.content"
          label="Text ({Hervorhebung})"
          className="w-full"
          rows={5}
        />
      </div>
      <div className="col-span-1 my-3">
        <Textarea
          propertyPath="data.subline.content"
          label="Zusatz"
          className="w-full"
          rows={3}
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
          <option value="white">Weiß</option>
          <option value="black">Schwarz</option>
        </select>
      </div>

      <div className="col-span-2  mt-3">
        <LogoAndColorSelector
          propertyPath="data.logo.label"
          label="Logo wählen"
        />
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
