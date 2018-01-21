// @flow
import * as React from "react";
import YouTube from "react-youtube";

import { StyledWrapper } from "./Styled";

type Props = {
  videoId: string,
  style?: Object
};

const PlayerYoutube = (props: Props) => (
  <div style={props.style}>
    <StyledWrapper>
      <YouTube videoId={props.videoId} opts={{ playerVars: { autoplay: 1 } }} />
    </StyledWrapper>
  </div>
);

export default PlayerYoutube;
