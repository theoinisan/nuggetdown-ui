import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, withKnobs, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

import ThemeProvider from "../src/Providers/ThemeProvider/ThemeProvider";
import CardPost from "../src/Cards/CardPost/CardPost";

const mockPost = {
  title: "Firestarter",
  artist: { name: "Tom Florin" },
  description:
    "This is a crazy song ! First composed by Prodigy, it has been re-recorded into a blues version by Torre Florin.",
  postedAt: Date.now(),
  user: {
    firstName: "Théo",
    lastName: "Inisan",
    pictureUrl:
      "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/p160x160/20046519_10214003339657598_2027824435997706717_n.jpg?oh=e2de27cd6e51636b8b334e0c4f9a4a95&oe=5AF3F78A"
  },
  pictureUrl:
    "https://i.scdn.co/image/9085d9374eb31ec10173ef4ece69d5266b36f9ea",
  medias: [
    {
      source: "YOUTUBE",
      url: "IPI3b9iPSN0"
    }
  ]
};

storiesOf("Cards", module)
  .addDecorator(withKnobs)
  .addDecorator(storie => <ThemeProvider>{storie()}</ThemeProvider>)
  .add("CardPost", () => (
    <CardPost
      style={{ margin: "20px auto", maxWidth: 600 }}
      playing={boolean("playing", false)}
      post={object("post", mockPost)}
    />
  ));
