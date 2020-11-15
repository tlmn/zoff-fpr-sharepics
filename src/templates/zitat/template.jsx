import { getColor, getSecondaryColor } from "../../lib/lib";

import LogoFPR from "../../assets/svg/logo-fpr";
import QuotationMark from "../../assets/svg/icon-quotationMark";
import React from "react";

export default ({ state }) => (
  <div className="col-span-6 relative">
    <div
      className={`template ${
        state.templateScale ? `template-scale` : `relative`
      }`}
      ref={state.ref}
    >
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

      {state.data.logo.show && (
        <LogoFPR
          width={196}
          fillColor={getSecondaryColor(state.data.background.color)}
          className="absolute z-40 right-0 bottom-0 mr-4 mb-4"
        />
      )}
    </div>
  </div>
);
