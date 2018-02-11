// @flow
import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  margin-bottom: 10px;
  background-color: white;
  border-radius: ${({ theme }) => theme.radius.sm};
  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    top: 50%;
    bottom: 0;
    left: 10px;
    right: 10px;
    border-radius: 100px / 10px;
  }
  &:after {
    right: 10px;
    left: auto;
    transform: skew(8deg) rotate(3deg);
  }
`;

export default StyledBox;
