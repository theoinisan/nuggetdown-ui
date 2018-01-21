// @flow
import * as React from "react";

import { StyledButtonWrapper } from "./Styled";

const CoverButton = () => (
  <StyledButtonWrapper>
    <svg width="200" height="200" viewBox="0 0 200 200">
      <circle cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
      <polyline
        className="PlayIcon"
        x="50"
        y="50"
        width="50"
        height="50"
        transform="translate(75, 55)"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
      />
    </svg>
  </StyledButtonWrapper>
);

export default CoverButton;
