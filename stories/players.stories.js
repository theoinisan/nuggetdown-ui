import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, withKnobs } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

import ThemeProvider from "../src/Providers/ThemeProvider/ThemeProvider";
import PlayerYoutube from "../src/Players/PlayerYoutube/PlayerYoutube";
import Cover from "../src/Players/Cover/Cover";

storiesOf("Players", module)
  .addDecorator(withKnobs)
  .addDecorator(storie => <ThemeProvider>{storie()}</ThemeProvider>)
  .add("PlayerYoutube", () => (
    <PlayerYoutube style={{ maxWidth: 600, margin: "20px auto" }} />
  ))
  .add("Cover", () => (
    <Cover
      pictureUrl="https://i.scdn.co/image/9085d9374eb31ec10173ef4ece69d5266b36f9ea"
      style={{ maxWidth: 600, margin: "20px auto" }}
    />
  ));
