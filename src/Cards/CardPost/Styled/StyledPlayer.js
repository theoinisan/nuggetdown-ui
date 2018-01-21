// @flow
import styled from "styled-components";

const StyledPlayer = styled.div`
  background: ${props => props.theme.colors.cardsBackground};
  transition: 250ms;
  overflow: hidden;
  border-radius: ${props => (props.playing ? "3px" : "0px")};
  transform: ${props => (props.playing ? "scale(1.1)" : "scale(1)")};
  margin: ${props => (props.playing ? "20px 0" : "0")};
  &:hover {
    border-radius: 3px;
    transform: scale(1.1);
    margin: 20px 0;
  }
`;

export default StyledPlayer;
