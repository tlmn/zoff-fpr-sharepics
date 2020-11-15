import React, { useRef } from "react";
import { getColor, updateProperty } from "../../lib/lib";

import Draggable from "react-draggable";
import Rectangle from "../../assets/svg/shape-rectangle";
import logoBFWBlack from "../../assets/images/logo-BFW--black.png";
import logoBFWWhite from "../../assets/images/logo-BFW--white.png";

export default ({ state, setState }) => {
  const draggableRef = useRef(null);

  return (
    <div className="col-span-6 relative">
      <div
        className={`template ${
          state.templateScale ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: state.primaryColor }}
        ref={state.ref}
      >
        <Draggable
          onDrag={(data) => {
            updateProperty({ state, setState }, "data.image.position", {
              x: data.x,
              y: data.y,
            });
          }}
          onStop={(e, data) => {
            draggableRef.current.style.transform = "translate(0px, 0px)";
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 z-50 w-full h-full cursor-pointer"
            draggable
            ref={draggableRef}
          />
        </Draggable>
        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.data.image.url !== null
                ? state.data.image.url
                : "/assets/images/defaultImages/zitat-mit-bild.jpg"
            })`,
            height: "100%",
            backgroundPositionX: `${state.data.image.position.x}px`,
            backgroundPositionY: `${state.data.image.position.y}px`,
            backgroundSize: `${state.data.image.scale * 10 + 100}%`,
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
          <Rectangle className="absolute top-0 left-0 z-30 p-4" />
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
        {state.data.logo.show && (
          <div className="absolute z-40 bottom-0 right-0">
            <img
              src={
                state.data.logo.color === "black" ? logoBFWBlack : logoBFWWhite
              }
              style={{width: "300px"}}
              className="mr-3 mb-3"
            />
          </div>
        )}
      </div>
    </div>
  );
};
