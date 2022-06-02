import React, { useContext, useRef } from "react";

import IconReset from "../../assets/svg/icon-reset";
import TemplateContext from "../templateContext";
import { updateProperty } from "../../lib/lib";

export default () => {
  const inputFileRef = useRef(null);
  const [state, setState] = useContext(TemplateContext);

  return (
    <>
      <div className="col-span-2 flex items-center">
        <label htmlFor="BGFile" className="label--inline mb-0">
          Bild wählen
        </label>
        <input
          type="file"
          id="BGFile"
          name="file"
          onChange={(e) =>
            e.target.files[0] !== null &&
            updateProperty(
              { state, setState },
              "data.image.url",
              URL.createObjectURL(e.target.files[0])
            )
          }
          className="hidden"
          ref={inputFileRef}
        />
        <button
          onClick={() => inputFileRef.current.click()}
          className="btn--small mr-2"
        >
          Datei wählen
        </button>
        <button
          onClick={() =>
            updateProperty(
              { state, setState },
              "data.image.url",
              "/assets/images/defaultImages/white.png"
            )
          }
          className="btn--small"
        >
          <IconReset height="20" className="block" />
        </button>
      </div>
      <div className="col-start-1 col-span-1 mt-3">
        <label htmlFor="imageScale" className="label--inline">
          Zoom Bild
        </label>
      </div>
      <div className="col-span-2 flex items-center">
        <input
          type="range"
          id="imageScale"
          name="imageScale"
          min="0"
          className="inline"
          defaultValue={state.data.image.scale}
          max="30"
          onChange={(e) =>
            updateProperty(
              { state, setState },
              "data.image.scale",
              e.target.value
            )
          }
        />
        <div className="inline-block">
          <button
            className="btn--small flex justify-center ml-2"
            onClick={() =>
              updateProperty({ state, setState }, "data.image.position", {
                x: 0,
                y: 0,
              })
            }
          >
            <IconReset height="20" className="block mr-1" /> Bildausschnitt
          </button>
        </div>
      </div>
    </>
  );
};
