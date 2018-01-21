var _templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1;\n  background-color: ", ";\n  opacity: 0;\n  cursor: pointer;\n  transition: 150ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  polyline {\n    fill: yellow;\n    fill-opacity: 0;\n    transition: fill-opacity 1.5s;\n  }\n  circle {\n    fill: transparent;\n    stroke: yellow;\n    stroke-width: 3;\n    stroke-dashoffset: 500;\n    stroke-dasharray: 534;\n    transition: stroke-dashoffset 1s;\n    -webkit-animation-play-state: running;\n    -moz-transform: rotate(-89deg) translateX(-190px);\n  }\n  &:hover {\n    opacity: 1;\n    circle {\n      stroke-dashoffset: 0;\n    }\n    polyline {\n      fill-opacity: 1;\n    }\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1;\n  background-color: ", ";\n  opacity: 0;\n  cursor: pointer;\n  transition: 150ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  polyline {\n    fill: yellow;\n    fill-opacity: 0;\n    transition: fill-opacity 1.5s;\n  }\n  circle {\n    fill: transparent;\n    stroke: yellow;\n    stroke-width: 3;\n    stroke-dashoffset: 500;\n    stroke-dasharray: 534;\n    transition: stroke-dashoffset 1s;\n    -webkit-animation-play-state: running;\n    -moz-transform: rotate(-89deg) translateX(-190px);\n  }\n  &:hover {\n    opacity: 1;\n    circle {\n      stroke-dashoffset: 0;\n    }\n    polyline {\n      fill-opacity: 1;\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

import getRGBFromHex from "../../../tools/getRGBFromHex";

var StyledButtonWrapper = styled.div(_templateObject, function (props) {
  return getRGBFromHex(props.theme.colors.primary, 0.4);
});

export default StyledButtonWrapper;