// @flow
import styled from "styled-components";

const StyledPlayer = styled.div`
  background: #000000;
  transition: 250ms;
  overflow: hidden;
  border-radius: ${props => (props.playing ? "3px" : "0px")};
  transform: ${props => (props.playing ? "scale(1.1)" : "scale(1)")};
  margin: ${props => (props.playing ? "20px 0" : "0")};
  &:hover {
    border-radius: ${({ theme }) => theme.radius.sm};
    transform: scale(1.1);
    margin: 20px 0;
  }
`;

export default StyledPlayer;
