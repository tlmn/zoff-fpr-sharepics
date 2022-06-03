import { cloneDeepWith, get, set } from "lodash";
import { useEffect, useState } from "react";

import { colors, colorsUpdated, logosAndColors } from "../config/vars";
import emojiRegex from "emoji-regex";
import { saveAs } from "file-saver";
import slugify from "react-slugify";
import { toJpeg } from "html-to-image";

export const html2image = async (
  { state, setState },
  fileName = "fpr",
  width = 1080,
  height = 1080
) => {
  updateProperty({ state, setState }, "templateScale.isScaled", false);
  toJpeg(state.ref.current, {
    quality: 1,
    width: width,
    height: height,
  }).then(function (blob) {
    saveAs(blob, `sharepic-${slugify(fileName.substring)}`);
    updateProperty({ state, setState }, "templateScale.isScaled", true);
  });
};
export const formatEmojis = (text = "") => {
  return text.replace(
    emojiRegex(),
    (m) => `<span class="not-italic" role="img">${m}</span>`
  );
};

export const getColor = (color) => {
  return colors.filter((c) => c.label === color)[0].color;
};

export const getUpdatedColor = (color) => {
  return colorsUpdated.filter((c) => c.label === color)[0].color;
};

export const getSecondaryColor = (color) => {
  return colors.filter((c) => c.label === color)[0].secondaryColor;
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const getColorFromLogoColor = (label) => {
  return logosAndColors.filter((obj) => obj.label === label)[0]
    .color;
};

export const getLogoFromLogoColor = (label) => {
  return logosAndColors.filter((obj) => obj.label === label)[0]
    .logo;
};

export const setBgColorAsColor = (highlight, color) => {
  return highlight === 'background' ? `style='color: ${color}'` : '';
};

export const updateProperty = ({ state, setState }, propertyPath, newValue) => {
  let prevState = cloneDeepWith(state);
  set(prevState, propertyPath, newValue);
  setState(prevState);
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
