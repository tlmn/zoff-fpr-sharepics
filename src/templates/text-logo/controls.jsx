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
        <label htmlFor="data.text.color" className="label--inline">
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

      <div className="col-span-2 mt-3">
        <label htmlFor="data.text.color" className="label--inline">
          Text position
        </label>

        <select
          id="data.body.position"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.body.position",
              e.target.value
            )
          }
          className="select-css"
        >
          {state.data.body.availablePositions.map(
            (item) =>
            <option value={Object.values(item)}>{Object.keys(item)}</option>
          )}
        </select>
      </div>


      <div className="col-span-2  mt-3">
        <label htmlFor="data.logo.type" className="label--inline">
          Logo
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
          <option value="Pfeil">Pfeil</option>
          <option value="Pari">Pari</option>
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
