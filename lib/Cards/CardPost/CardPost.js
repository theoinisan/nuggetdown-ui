import * as React from "react";
import moment from "moment";

import FlexContainer from "../../Layout/FlexContainer/FlexContainer";
import Avatar from "../../Utils/Avatar/Avatar";
import PlayerAll from "../../Players/PlayerAll/PlayerAll";
import { StyledWrapper, StyledContainer, StyledDescription, StyledArtistName, StyledHeader, StyledUserName, StyledDate, StyledPlayer } from "./Styled";

var CardPost = function CardPost(props) {
  return React.createElement(
    StyledWrapper,
    { style: props.style },
    React.createElement(
      StyledHeader,
      null,
      React.createElement(
        FlexContainer,
        { alignItems: "center", justifyContent: "space-between" },
        React.createElement(
          "div",
          null,
          React.createElement(
            FlexContainer,
            { alignItems: "center" },
            React.createElement(Avatar, { pictureUrl: props.post.user.pictureUrl, size: 25 }),
            React.createElement(
              StyledUserName,
              null,
              props.post.user.firstName + " " + props.post.user.lastName
            )
          )
        ),
        React.createElement(
          StyledDate,
          null,
          moment(props.post.postedAt).fromNow()
        )
      )
    ),
    React.createElement(
      StyledContainer,
      null,
      React.createElement(
        FlexContainer,
        { alignItems: "flex-end" },
        React.createElement(
          "h3",
          null,
          props.post.title
        ),
        React.createElement(
          StyledArtistName,
          null,
          props.post.artist.name
        )
      )
    ),
    React.createElement(
      StyledPlayer,
      { playing: props.playing },
      React.createElement(PlayerAll, {
        post: props.post,
        onPlay: props.onPlay,
        playing: props.playing
      })
    ),
    React.createElement(
      StyledContainer,
      null,
      React.createElement(
        StyledDescription,
        null,
        props.post.description
      )
    )
  );
};

CardPost.defaultProps = {
  playing: false
};

export default CardPost;