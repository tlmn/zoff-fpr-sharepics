import React from "react";

export default ({ width, ...props }) => (
  <svg width={width} height={width} viewBox="0 0 850 850" {...props}>
    <rect
      y="425"
      width="600"
      height="600"
      transform="rotate(-45 0 425)"
      fill="#fff"
    />
  </svg>
);
