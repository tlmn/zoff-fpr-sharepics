import React, { useContext } from "react";
import { getColor, getSecondaryColor } from "../../lib/lib";

import LogoFPR from "../../assets/svg/logo-fpr";
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
        className="absolute z-20 w-full h-full top-0 left-0 flex flex-col p-3"
        style={{ paddingTop: "10px" }}
      >
        <div
          className="leading-normal uppercase font-bold font-lulo mt-2 break-words"
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

    </TemplateLayout>
  );
};
