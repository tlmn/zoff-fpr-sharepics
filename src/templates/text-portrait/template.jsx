import React, { useContext } from "react";

import DraggableBg from "../../components/inputs/draggableBg";
import LogoFPR from "../../assets/svg/logo-fpr";
import LogoBFW from "../../assets/svg/logo-bfw";
import LogoPari from "../../assets/svg/pari-multi";
import DiagonalOverlay from "../../assets/svg/diagonal-surface";

import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";

import { getColorFromLogoColor,
         getLogoFromLogoColor,
         getUpdatedColor} from "../../lib/lib";


export default () => {
  const [state] = useContext(TemplateContext);
  return (
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
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-20"
      >
        <DiagonalOverlay
          width={982}
          className="mr-4 mb-4"
          fillColor={getUpdatedColor(state.data.background.color)}
        />
      </div>

      <div
        className="absolute z-20 h-full top-0 left-0 flex flex-col p-3"
        style={{ paddingTop: `10px`,
                 width: '55%'}}
      >
        <div
          className="font-normal font-avenir mt-2 break-words"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
            color: getUpdatedColor(state.data.text.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content
              .replace(/\n/gi, "<br/>"),
          }}
        />
        </div>

        <div
          className="absolute z-30 bottom-0 left-0 flex flex-col p-3"
          style={{ paddingTop: "10px",
                   width: `42%`}}
        >
          <div
            className="font-normal font-avenir mt-2 break-words"
            style={{
              fontSize: `${state.data.subline.scale.value}px`,
              color: getUpdatedColor(state.data.text.color),
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.subline.content
                .replace(/\n/gi, "<br/>"),
            }}
          />
          </div>

        {state.data.logo.label !== "none" && (
          <div className="absolute z-40 bottom-0 right-0">
            {getLogoFromLogoColor(state.data.logo.label) === "BFW" && (
              <LogoBFW
                width={330}
                className="mr-4 mb-3"
                fillColor={getColorFromLogoColor(state.data.logo.label)}
              />
            )}
            {getLogoFromLogoColor(state.data.logo.label) === "FPR" && (
              <LogoFPR
                width={170}
                className="mr-4 mb-3"
                fillColor={getColorFromLogoColor(state.data.logo.label)}
              />
            )}
            {getLogoFromLogoColor(state.data.logo.label) === "Pari" && (

              <LogoPari
                width={390}
                className="mr-4 mb-4"
                fillColor={getColorFromLogoColor(state.data.logo.label)}
              />
            )}
          </div>
        )}



    </TemplateLayout>
  );
};