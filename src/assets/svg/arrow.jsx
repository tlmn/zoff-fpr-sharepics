import React from "react";

export default ({ width, fillColor, strokeWidth = "6", ...props }) => (
  <svg width={width} viewBox="0 0 78 59" fill="none" {...props}>
    <path d="M46.2565 2.39323L74.3633 31.0M73.3633 27.9L46.2565 56.6068M73.3633 29.5L0.649719 29.5" stroke={fillColor} stroke-width={strokeWidth}/>
  </svg>
);
