import React, { useContext, useRef } from "react";

import Draggable from "react-draggable";
import TemplateContext from "../templateContext";
import { updateProperty } from "../../lib/lib";

export default ({ propertyPath }) => {
  const refDraggable = useRef(null);
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <Draggable
        onStart={(e, data) =>
          updateProperty({ state, setState }, propertyPath, {
            x: data.x,
            y: data.y,
          })
        }
        onDrag={(e, data) =>
          updateProperty({ state, setState }, propertyPath, {
            x: data.x,
            y: data.y,
          })
        }
        onStop={() => {
          refDraggable.current.style.transform = "translate(0px, 0px)";
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 w-full h-full z-50 cursor-move"
          ref={refDraggable}
        />
      </Draggable>
    </>
  );
};
