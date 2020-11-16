import { cloneDeepWith, get, set } from "lodash";
import { useEffect, useState } from "react";

import { colors } from "../config/vars";
import emojiRegex from "emoji-regex";
import slugify from "react-slugify";
import { toJpeg } from "html-to-image";

export const html2image = async ({ state, setState }, fileName = "fpr") => {
  updateProperty({ state, setState }, "templateScale.isScaled", false);
  toJpeg(state.ref.current, {
    quality: 1,
    width: 1080,
    height: 1080,
  }).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = `sharepic-${slugify(fileName.substring(0, 20))}.jpg`;
    link.href = dataUrl;
    link.click();
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

export const getSecondaryColor = (color) => {
  return colors.filter((c) => c.label === color)[0].secondaryColor;
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const updateProperty = ({ state, setState }, path, newValue) => {
  let prevState = cloneDeepWith(state);
  set(prevState, path, newValue);
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
