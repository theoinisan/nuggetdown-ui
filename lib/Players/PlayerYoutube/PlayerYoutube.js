import * as React from "react";
import YouTube from "react-youtube";

import { StyledWrapper } from "./Styled";

var PlayerYoutube = function PlayerYoutube(props) {
  return React.createElement(
    "div",
    { style: props.style },
    React.createElement(
      StyledWrapper,
      null,
      React.createElement(YouTube, { videoId: props.videoId, opts: { playerVars: { autoplay: 1 } } })
    )
  );
};

export default PlayerYoutube;