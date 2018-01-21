// @flow
import * as React from "react";

import CoverButton from "./CoverButton";
import { StyledWrapper, StyledImage, StyledButtonWrapper } from "./Styled";

type Props = {
  pictureUrl: string,
  style?: Object
};

const Cover = (props: Props) => (
  <div style={props.style}>
    <StyledWrapper>
      <CoverButton />
      <StyledImage src={props.pictureUrl} />
    </StyledWrapper>
  </div>
);

export default Cover;
