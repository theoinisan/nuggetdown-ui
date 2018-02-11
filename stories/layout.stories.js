import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { object, withKnobs, boolean } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";

import ThemeProvider from "../src/Providers/ThemeProvider/ThemeProvider";
import Topbar from "../src/Layout/Topbar";

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .addDecorator(storie => <ThemeProvider>{storie()}</ThemeProvider>)
  .add("Topbar", () => <Topbar />);
