import React, { useContext } from "react";

import DraggableBg from "../../components/inputs/draggableBg";
import LogoFPR from "../../assets/svg/logo-fpr";
import Rectangle from "../../assets/svg/shape-rectangle";
import TemplateContext from "../../components/templateContext";
import TemplateLayout from "../../components/templateLayout";
import { getColor } from "../../lib/lib";
import logoBFWBlack from "../../assets/images/logo-BFW--black.png";
import logoBFWWhite from "../../assets/images/logo-BFW--white.png";

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
                : "/assets/images/defaultImages/zitat-mit-bild.png"
            })`,
            height: "100%",
            backgroundPositionX: `${state.data.image.position.x}px`,
            backgroundPositionY: `${state.data.image.position.y}px`,
            backgroundSize: `${state.data.image.scale * 10 + 100}%`,
          }}
        />

        {state.data.logo.type !== "none" && (
          <div className="absolute z-40 bottom-0 right-0">
            {state.data.logo.type === "BFW" && (
              <img
                src={
                  state.data.logo.color === "black"
                    ? logoBFWBlack
                    : logoBFWWhite
                }
                style={{ width: "300px" }}
                className="mr-4 mb-4"
                alt="Logo"
              />
            )}
            {state.data.logo.type === "FPR" && (
              <LogoFPR
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
