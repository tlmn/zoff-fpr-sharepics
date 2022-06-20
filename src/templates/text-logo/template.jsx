import React, { useContext } from "react";
import { getUpdatedColor, setBgColorAsColor } from "../../lib/lib";

import LogoFPR from "../../assets/svg/logo-fpr";
import LogoBFW from "../../assets/svg/logo-bfw";
import LogoPari from "../../assets/svg/pari-multi"
import LogoArrow from "../../assets/svg/arrow";

import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";

import { isLogoFprOrNone } from "../../lib/lib";


export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <TemplateLayout>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundColor: getUpdatedColor(state.data.background.color),
        }}
      />

      <div
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-3 overflow-hidden"
        style={{ paddingTop: `10px`, justifyContent: `${state.data.body.position}` }}
      >
        <div
          className="font-normal font-avenir mt-2 break-words"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
            color: getUpdatedColor(state.data.text.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content
              .replace(/\n/gi, "<br/>")
              .replace(/{/gi, `<span class='${state.data.highlight.active} ${state.data.text.color}' ${setBgColorAsColor(state.data.highlight.active, getUpdatedColor(state.data.background.color))}>`)
              .replace(/}/gi, "</span>"),
          }}
        />
        </div>

        <div
          className="absolute z-30 bottom-0 left-0 flex flex-col p-3"
          style={{ paddingTop: "10px",
                   width: `${isLogoFprOrNone(state.data.logo.label) ? 75 : 55 }%`}}
        >
          <div
            className="font-normal font-avenir mt-2 break-words"
            style={{
              fontSize: `30px`,
              color: getUpdatedColor(state.data.text.color),
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.subline.content,
            }}
          />
          </div>

        {state.data.logo.label !== "none" && (
          <div className="absolute z-40 bottom-0 right-0">
            {state.data.logo.type === "BFW" && (
              <LogoBFW
                width={330}
                className="mr-4 mb-3"
                fillColor={getUpdatedColor(state.data.text.color)}
              />
            )}
            {state.data.logo.type === "FPR" && (
              <LogoFPR
                width={170}
                className="mr-4 mb-3"
                fillColor={getUpdatedColor(state.data.text.color)}
              />
            )}
            {state.data.logo.type === "Pari" && (
              <LogoPari
                width={390}
                className="mr-4 mb-4"
                fillColor={getUpdatedColor(state.data.text.color)}
              />
            )}

            {state.data.logo.type === "Pfeil" && (
              <LogoArrow
                width={170}
                className="mr-4 mb-4"
                fillColor={getUpdatedColor(state.data.text.color)}
                strokeWidth="5"
              />
            )}
          </div>
        )}

    </TemplateLayout>
  );
};
