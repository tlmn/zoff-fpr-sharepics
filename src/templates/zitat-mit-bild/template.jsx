import DraggableBg from "../../components/inputs/draggableBg";
import LogoFPR from "../../assets/svg/logo-fpr";
import React from "react";
import Rectangle from "../../assets/svg/shape-rectangle";
import TemplateLayout from "../../components/templateLayout";
import { getColor } from "../../lib/lib";
import logoBFWBlack from "../../assets/images/logo-BFW--black.png";
import logoBFWWhite from "../../assets/images/logo-BFW--white.png";

export default ({ state, setState }) => (
  <>
    <TemplateLayout state={state}>
      <DraggableBg
        state={state}
        setState={setState}
        propertyPath="data.image.position"
      />
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
          filter: "grayscale(100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-20"
        style={{
          backgroundColor: getColor(state.data.overlay.color),
          mixBlendMode: "multiply",
        }}
      />

      {state.data.rectangle.show && (
        <div className="absolute top-0 left-0 z-30 w-full h-full p-4">
          <Rectangle className="" width="100%" />
        </div>
      )}
      <div className="absolute z-40 w-full h-full top-0 left-0 justify-center items-center flex">
        <div
          className="text-center leading-tight"
          style={{ fontSize: `${state.data.body.scale.value}px` }}
        >
          <div
            className="block font-lulo font-bold"
            dangerouslySetInnerHTML={{
              __html: state.data.body.content[0].replace(/\n/gi, "<br/>"),
            }}
            style={{
              color: !state.data.rectangle.show
                ? getColor(state.data.body.color)
                : "#000",
            }}
          />
          <div
            className="block font-lulo"
            dangerouslySetInnerHTML={{
              __html: state.data.body.content[1].replace(/\n/gi, "<br/>"),
            }}
            style={{
              color: !state.data.rectangle.show
                ? getColor(state.data.body.color)
                : "#000",
            }}
          />
        </div>
      </div>
      {state.data.logo.type !== "none" && (
        <div className="absolute z-40 bottom-0 right-0">
          {state.data.logo.type === "BFW" && (
            <img
              src={
                state.data.logo.color === "black" ? logoBFWBlack : logoBFWWhite
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
