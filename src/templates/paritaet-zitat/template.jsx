import { getColor, getSecondaryColor } from "../../lib/lib";

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
          background: getColor(state.data.background.color),
        }}
      />

      <div
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-4"
        style={{ paddingTop: "200px" }}
      >
        <div
          className="leading-none underline font-avenir font-bold text-lg"
          style={{
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.headline.content.replace(/\n/gi, "<br/>"),
          }}
        />
        <div
          className="leading-tight font-avenir font-bold break-words mt-2"
          style={{
            fontSize: `${state.data.body.scale.value}px`,
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.body.content.replace(/\n/gi, "<br/>"),
          }}
        />
        <div
          className="leading-normal font-avenir italic text-lg mt-3"
          style={{
            color: getSecondaryColor(state.data.background.color),
          }}
          dangerouslySetInnerHTML={{
            __html: state.data.author.content.replace(/\n/gi, "<br/>"),
          }}
        />
      </div>
    </div>
  </div>
);
