import React, { useContext } from "react";

import DraggableBg from "../../components/inputs/draggableBg";
import LogoFPR from "../../assets/svg/logo-fpr";
import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";
import { getColor, getUpdatedColor } from "../../lib/lib";
import LogoBFW from "../../assets/svg/logo-bfw";
import LogoArrow from "../../assets/svg/arrow";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <>
      <TemplateLayout>
        <DraggableBg propertyPath="data.image.position" />
        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.data.image.url !== null
                ? state.data.image.url
                : "/assets/images/defaultImages/bild-logo.jpg"
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

        <div className="absolute z-40 w-full h-full top-0 left-0 justify-center items-center flex">
          <div
            className="text-center leading-tight"
            style={{ fontSize: `${state.data.body.scale.value}px` }}
          >
            <div
              className="block font-lulo font-bold"
              dangerouslySetInnerHTML={{
                __html: state.data.body.content[0].replace(/\n/gi, "<br/>"),
              }}
              style={{
                color: !state.data.rectangle.show
                  ? getColor(state.data.body.color)
                  : "#000",
              }}
            />
            <div
              className="block font-lulo"
              dangerouslySetInnerHTML={{
                __html: state.data.body.content[1].replace(/\n/gi, "<br/>"),
              }}
              style={{
                color: !state.data.rectangle.show
                  ? getColor(state.data.body.color)
                  : "#000",
              }}
            />
          </div>
        </div>
        {state.data.logo.type !== "none" && (
          <div className="absolute z-40 bottom-0 right-0">
            {state.data.logo.type === "BFW" && (
              <LogoBFW
                width={330}
                className="mr-4 mb-3"
                fillColor={getUpdatedColor(state.data.logo.color)}
              />
            )}
            {state.data.logo.type === "FPR" && (
              <LogoFPR
                width={170}
                className="mr-4 mb-4"
                fillColor={state.data.logo.color}
              />
            )}
            {state.data.logo.type === "Pfeil" && (
              <LogoArrow
                width={170}
                className="mr-4 mb-4"
                fillColor={state.data.logo.color}
              />
            )}
          </div>
        )}
      </TemplateLayout>
    </>
  );
};
