import React, { useContext } from "react";
import { getColor, getSecondaryColor } from "../../lib/lib";

import LogoFPR from "../../assets/svg/logo-fpr";
import LogoBFW from "../../assets/svg/logo-bfw";
import LogoArrow from "../../assets/svg/arrow";

import QuotationMark from "../../assets/svg/icon-quotationMark";
import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";

export default () => {
  const [state] = useContext(TemplateContext);
  return (
    <TemplateLayout>
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          backgroundColor: getColor(state.data.background.color),
        }}
      />

      <div
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-4"
        style={{ paddingTop: "120px" }}
      >
        <QuotationMark
          width={90}
          fillColor={getSecondaryColor(state.data.background.color)}
        />
        <div
          className="leading-normal uppercase font-bold font-lulo mt-2 break-words"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content.replace(/\n/gi, "<br/>"),
          }}
        />
        <div
          className="leading-normal font-merriweather italic text-lg mt-3"
          style={{
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.author.content.replace(/\n/gi, "<br/>"),
          }}
        />
      </div>

        {state.data.logo.type !== "none" && (
          <div className="absolute z-40 bottom-0 right-0">
            {state.data.logo.type === "BFW" && (
              <LogoBFW
                width={330}
                className="mr-4 mb-3"
                fillColor={getSecondaryColor(state.data.background.color)}
              />
            )}
            {state.data.logo.type === "FPR" && (
              <LogoFPR
                width={170}
                className="mr-4 mb-3"
                fillColor={getSecondaryColor(state.data.background.color)}
              />
            )}

            {state.data.logo.type === "Pfeil" && (
              <LogoArrow
                width={170}
                cglassName="mr-4 mb-4"
                fillColor={getSecondaryColor(state.data.background.color)}
                strokeWidth="5"
              />
            )}
          </div>
        )}
    </TemplateLayout>
  );
};
