import React, { useContext } from "react";
import { getColor, getSecondaryColor } from "../../lib/lib";

import LogoFPR from "../../assets/svg/logo-fpr";
import LogoNbFBlack from "../../assets/images/logo-NbF--black.png";
import LogoNbFWhite from "../../assets/images/logo-NbF--white.png";
import TemplateContext from "../../templateContext";
import TemplateLayout from "../../components/templateLayout";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <TemplateLayout state={state}>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundColor: getColor(state.data.background.color),
        }}
      />

      <div className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-4">
        <div className="flex-1 flex justify-center flex-col">
          <div
            className="leading-normal uppercase font-lulo text-lg break-words"
            style={{
              color: getSecondaryColor(state.data.background.color),
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.headline.content.replace(/\n/gi, "<br/>"),
            }}
          />

          <div
            className="leading-normal font-merriweather italic mt-3 break-words"
            style={{
              fontSize: `${state.data.body.scale.value}px`,
              color: getSecondaryColor(state.data.background.color),
            }}
            dangerouslySetInnerHTML={{
              __html: state.data.body.content
                .replace(/\n/gi, "<br/>")
                .replace(/{/gi, "<span class='underline'>")
                .replace(/}/gi, "</span>"),
            }}
          />
        </div>
        <div className="flex items-center mt-2">
          <div className="flex-1 h-full">
            <div
              className="leading-normal font-merriweather italic text-lg"
              style={{
                color: getSecondaryColor(state.data.background.color),
              }}
              dangerouslySetInnerHTML={{
                __html: state.data.subline.content.replace(/\n/gi, "<br/>"),
              }}
            />
          </div>
          {state.data.logo.type === "FPR" && (
            <LogoFPR
              width={196}
              fillColor={getSecondaryColor(state.data.background.color)}
              className=""
            />
          )}
          {state.data.logo.type === "NbF" && (
            <img
              src={
                getSecondaryColor(state.data.background.color) === "#000"
                  ? LogoNbFBlack
                  : LogoNbFWhite
              }
              className=""
              width={200}
              alt="Logo"
            />
          )}
        </div>
      </div>
    </TemplateLayout>
  );
};
