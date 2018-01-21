// @flow
import styled from "styled-components";

import getRGBFromHex from "../../../tools/getRGBFromHex";

const StyledButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  background-color: ${props => getRGBFromHex(props.theme.colors.primary, 0.4)};
  opacity: 0;
  cursor: pointer;
  transition: 150ms;
  display: flex;
  align-items: center;
  justify-content: center;
  polyline {
    fill: yellow;
    fill-opacity: 0;
    transition: fill-opacity 1.5s;
  }
  circle {
    fill: transparent;
    stroke: yellow;
    stroke-width: 3;
    stroke-dashoffset: 500;
    stroke-dasharray: 534;
    transition: stroke-dashoffset 1s;
    -webkit-animation-play-state: running;
    -moz-transform: rotate(-89deg) translateX(-190px);
  }
  &:hover {
    opacity: 1;
    circle {
      stroke-dashoffset: 0;
    }
    polyline {
      fill-opacity: 1;
    }
  }
`;

export default StyledButtonWrapper;
