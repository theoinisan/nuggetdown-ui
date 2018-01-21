import * as React from "react";

import Cover from "../Cover/Cover";
import PlayerYoutube from "../PlayerYoutube/PlayerYoutube";

var youtube = function youtube(post) {
  return post.medias.find(function (media) {
    return media.source === "YOUTUBE";
  });
};

var PlayerAll = function PlayerAll(props) {
  return React.createElement(
    "div",
    null,
    !props.playing && React.createElement(
      "div",
      { onClick: props.onPlay },
      React.createElement(Cover, { pictureUrl: props.post.pictureUrl })
    ),
    props.playing && youtube(props.post) && React.createElement(PlayerYoutube, { videoId: youtube(props.post).url })
  );
};

PlayerAll.defaultProps = {
  playing: false
};

export default PlayerAll;