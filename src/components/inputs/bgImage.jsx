import IconReset from "../../assets/svg/icon-reset";
import React from "react";
import { updateProperty } from "../../lib/lib";

export default ({ state, setState }) => (
  <>
    <div className="col-span-2">
      <label htmlFor="BGFile" className="label--inline">
        Bild wählen
      </label>
      <input
        type="file"
        id="BGFile"
        name="file"
        onChange={(e) =>
          e.target.files[0] !== null &&
          setState({
            ...state,
            data: {
              ...state.data,
              image: {
                ...state.data.image,
                url: URL.createObjectURL(e.target.files[0]),
              },
            },
          })
        }
      />
    </div>
    <div className="col-span-2">
      <label id="imageScale" className="label--inline">Zoom Bild</label>
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
      <div className="inline">
        <button
          className="btn flex justify-center mb-2"
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
