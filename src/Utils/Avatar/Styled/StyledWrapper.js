// @flow
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

export default StyledWrapper;
