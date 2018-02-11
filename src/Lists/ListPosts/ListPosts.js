// @flow
import * as React from "react";

import CardPost from "../../Cards/CardPost/CardPost";

type Artist = {
  name: string
};

type User = {
  pictureUrl: string,
  firstName: string,
  lastName: string
};

type Media = {
  source: "YOUTUBE",
  url: string
};

type Post = {
  id: string,
  postedAt: string,
  title: string,
  artist: Artist,
  user: User,
  description: string,
  pictureUrl: string,
  medias: Media[]
};

type Props = {
  posts: Post[],
  style?: Object
};

type State = {
  postPlaying: string | null
};

class ListPosts extends React.Component<Props, State> {
  state = {
    postPlaying: null
  };

  _play = (id: string) => () => {
    this.setState(() => ({
      postPlaying: id
    }));
  };

  render() {
    const { posts, style } = this.props;
    const { postPlaying } = this.state;
    return (
      <div style={style}>
        {posts.map(post => (
          <CardPost
            post={post}
            key={post.id}
            onPlay={this._play(post.id)}
            playing={postPlaying === post.id}
          />
        ))}
      </div>
    );
  }
}

export default ListPosts;
