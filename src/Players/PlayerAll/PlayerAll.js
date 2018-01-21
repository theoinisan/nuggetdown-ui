// @flow
import * as React from "react";

import Cover from "../Cover/Cover";
import PlayerYoutube from "../PlayerYoutube/PlayerYoutube";

type Media = {
  source: "YOUTUBE",
  url: string
};

type Post = {
  pictureUrl: string,
  medias: Media[]
};

type Props = {
  post: Post,
  playing: boolean,
  onPlay: () => void
};

const youtube = (post: Post) =>
  post.medias.find(media => media.source === "YOUTUBE");

const PlayerAll = (props: Props) => (
  <div>
    {!props.playing && (
      <div onClick={props.onPlay}>
        <Cover pictureUrl={props.post.pictureUrl} />
      </div>
    )}
    {props.playing &&
      youtube(props.post) && (
        <PlayerYoutube videoId={youtube(props.post).url} />
      )}
  </div>
);

PlayerAll.defaultProps = {
  playing: false
};

export default PlayerAll;
