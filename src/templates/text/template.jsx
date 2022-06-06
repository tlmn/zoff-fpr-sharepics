import React, { useContext } from "react";
import { getUpdatedColor, setBgColorAsColor } from "../../lib/lib";

import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";


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
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-3"
        style={{ paddingTop: "10px" }}
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

    </TemplateLayout>
  );
};
