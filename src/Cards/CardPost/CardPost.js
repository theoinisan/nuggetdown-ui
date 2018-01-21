// @flow
import * as React from "react";
import moment from "moment";

import FlexContainer from "../../Layout/FlexContainer/FlexContainer";
import Avatar from "../../Utils/Avatar/Avatar";
import PlayerAll from "../../Players/PlayerAll/PlayerAll";
import {
  StyledWrapper,
  StyledContainer,
  StyledDescription,
  StyledArtistName,
  StyledHeader,
  StyledUserName,
  StyledDate,
  StyledPlayer
} from "./Styled";

type Artist = {
  name: string
};

type User = {
  pictureUrl: string,
  firstName: string,
  lastName: string
};

type Post = {
  postedAt: string,
  title: string,
  artist: Artist,
  user: User,
  description: string,
  pictureUrl: string
};

type Props = {
  post: Post,
  playing: boolean,
  onPlay: () => void,
  style?: Object
};

const CardPost = (props: Props) => (
  <StyledWrapper style={props.style}>
    <StyledHeader>
      <FlexContainer alignItems="center" justifyContent="space-between">
        <div>
          <FlexContainer alignItems="center">
            <Avatar pictureUrl={props.post.user.pictureUrl} size={25} />
            <StyledUserName>{`${props.post.user.firstName} ${
              props.post.user.lastName
            }`}</StyledUserName>
          </FlexContainer>
        </div>
        <StyledDate>{moment(props.post.postedAt).fromNow()}</StyledDate>
      </FlexContainer>
    </StyledHeader>
    <StyledContainer>
      <FlexContainer alignItems="flex-end">
        <h3>{props.post.title}</h3>
        <StyledArtistName>{props.post.artist.name}</StyledArtistName>
      </FlexContainer>
    </StyledContainer>
    <StyledPlayer playing={props.playing}>
      <PlayerAll
        post={props.post}
        onPlay={props.onPlay}
        playing={props.playing}
      />
    </StyledPlayer>
    <StyledContainer>
      <StyledDescription>{props.post.description}</StyledDescription>
    </StyledContainer>
  </StyledWrapper>
);

CardPost.defaultProps = {
  playing: false
};

export default CardPost;
