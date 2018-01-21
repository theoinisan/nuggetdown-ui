// @flow
import * as React from "react";

import { StyledWrapper, StyledImage } from "./Styled";

type Props = {
  size: number,
  pictureUrl: string
};

const Avatar = (props: Props) => (
  <StyledWrapper size={props.size}>
    <StyledImage src={props.pictureUrl} />
  </StyledWrapper>
);

Avatar.defaultProps = {
  size: 40
};

export default Avatar;
