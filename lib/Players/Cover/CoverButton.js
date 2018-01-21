import * as React from "react";

import { StyledButtonWrapper } from "./Styled";

var CoverButton = function CoverButton() {
  return React.createElement(
    StyledButtonWrapper,
    null,
    React.createElement(
      "svg",
      { width: "200", height: "200", viewBox: "0 0 200 200" },
      React.createElement("circle", { cx: "95", cy: "95", r: "85", transform: "rotate(-90, 95, 95)" }),
      React.createElement("polyline", {
        className: "PlayIcon",
        x: "50",
        y: "50",
        width: "50",
        height: "50",
        transform: "translate(75, 55)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        points: "\r 0.375,0.375 45.63,38.087 0.375,75.8 "
      })
    )
  );
};

export default CoverButton;