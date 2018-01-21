// @flow
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import DefaultTheme from "../../Constants/DefaultTheme";
import { StyledWrapper } from "./Styled";

type Props = {
  theme: Object,
  children?: React.Node
};

const ThemeProvider = (props: Props) => (
  <StyledThemeProvider theme={props.theme}>
    <StyledWrapper>{props.children}</StyledWrapper>
  </StyledThemeProvider>
);

ThemeProvider.defaultProps = {
  theme: DefaultTheme
};

export default ThemeProvider;
