import DraggableBg from "../../components/inputs/draggableBg";
import React from "react";
import TemplateLayout from "../../components/templateLayout";
import { getColor } from "../../lib/lib";

export default ({ state, setState }) => (
  <>
    <TemplateLayout state={state} isThumbnail={true}>
      <DraggableBg
        state={state}
        setState={setState}
        propertyPath="data.image.position"
      />
      <div
        className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
        style={{
          backgroundImage: `url(${
            state.data.image.url !== null
              ? state.data.image.url
              : "/assets/images/defaultImages/bild-farbe.jpg"
          })`,
          height: "100%",
          backgroundPositionX: `${state.data.image.position.x}px`,
          backgroundPositionY: `${state.data.image.position.y}px`,
          backgroundSize: `${state.data.image.scale * 10 + 100}%`,
          filter: "grayscale(100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-20"
        style={{
          backgroundColor: getColor(state.data.overlay.color),
          mixBlendMode: "multiply",
        }}
      />
    </TemplateLayout>
  </>
);
