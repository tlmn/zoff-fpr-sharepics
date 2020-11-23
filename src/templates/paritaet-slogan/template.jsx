import { getColor, getSecondaryColor } from "../../lib/lib";

import React from "react";
import TemplateLayout from "../../components/templateLayout";

export default ({ state }) => (
  <TemplateLayout state={state}>
    <div
      className="absolute top-0 left-0 w-full h-full z-10"
      style={{
        background: getColor(state.data.background.color),
      }}
    />

    <div className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-4">
      <div className="flex-1 flex items-center justify-center">
        <div
          className="leading-none text-center font-baskerville break-words "
          style={{
            fontSize: `${state.data.body.scale.value}px`,
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content.replace(/\n/gi, "<br/>"),
          }}
        />
      </div>
      <div
        className="leading-normal font-avenir font-bold text-center text-lg mt-3"
        style={{
          color: getSecondaryColor(state.data.background.color),
        }}
        dangerouslySetInnerHTML={{
          __html: state.data.subline.content.replace(/\n/gi, "<br/>"),
        }}
      />
    </div>
  </TemplateLayout>
);
