import React, { useContext } from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { html2image } from "../../lib/lib";

import BgImage from "../../components/inputs/bgImage";
import LogoAndColorSelector from "../../components/inputs/logoColorSelector";
import TemplateContext from "../../components/templateContext";

export default () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="col-span-2 mb-3">
        <BgImage currentSlide={0} />
      </div>


      <div className="col-span-2  mb-3">
        <LogoAndColorSelector
          propertyPath="data.logo.label"
          label="Logo wählen"
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
            state.data.body.content[0]
          )
        }
      >
        Download
      </button>
    </>
  );
};
