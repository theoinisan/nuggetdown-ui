import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, withKnobs, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

import ThemeProvider from "../src/Providers/ThemeProvider/ThemeProvider";
import ListPosts from "../src/Lists/ListPosts/ListPosts";

const mockPosts = [
  {
    id: "01",
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
  },
  {
    id: "02",
    title: "Busy Earnin'",
    artist: { name: "Jungle" },
    description: "What a wonderful song",
    postedAt: Date.now(),
    user: {
      firstName: "Mélissa",
      lastName: "Toussaint",
      pictureUrl:
        "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-1/c33.0.160.160/p160x160/22449990_10214305283695113_6096047938249202242_n.jpg?oh=dcd9e2f1d62cef1498467e71806d59e3&oe=5AED4C15"
    },
    pictureUrl: "http://junglejunglejungle.com/build/img/jungle-artwork.jpg",
    medias: [
      {
        source: "YOUTUBE",
        url: "BcsfftwLUf0"
      }
    ]
  }
];

storiesOf("Lists", module)
  .addDecorator(withKnobs)
  .addDecorator(storie => <ThemeProvider>{storie()}</ThemeProvider>)
  .add("ListPosts", () => (
    <ListPosts
      posts={mockPosts}
      style={{ maxWidth: 600, margin: "20px auto" }}
    />
  ));
