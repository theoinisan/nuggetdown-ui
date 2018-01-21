import * as React from "react";

import CoverButton from "./CoverButton";
import { StyledWrapper, StyledImage, StyledButtonWrapper } from "./Styled";

var Cover = function Cover(props) {
  return React.createElement(
    "div",
    { style: props.style },
    React.createElement(
      StyledWrapper,
      null,
      React.createElement(CoverButton, null),
      React.createElement(StyledImage, { src: props.pictureUrl })
    )
  );
};

export default Cover;