import * as React from "react";

import { StyledWrapper, StyledImage } from "./Styled";

var Avatar = function Avatar(props) {
  return React.createElement(
    StyledWrapper,
    { size: props.size },
    React.createElement(StyledImage, { src: props.pictureUrl })
  );
};

Avatar.defaultProps = {
  size: 40
};

export default Avatar;