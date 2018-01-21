// @flow
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.text};
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export default StyledWrapper;
