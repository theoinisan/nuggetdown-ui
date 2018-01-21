import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import DefaultTheme from "../../Constants/DefaultTheme";
import { StyledWrapper } from "./Styled";

var ThemeProvider = function ThemeProvider(props) {
  return React.createElement(
    StyledThemeProvider,
    { theme: props.theme },
    React.createElement(
      StyledWrapper,
      null,
      props.children
    )
  );
};

ThemeProvider.defaultProps = {
  theme: DefaultTheme
};

export default ThemeProvider;