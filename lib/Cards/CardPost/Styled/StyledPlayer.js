var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  transition: 250ms;\n  overflow: hidden;\n  border-radius: ", ";\n  transform: ", ";\n  margin: ", ";\n  &:hover {\n    border-radius: 3px;\n    transform: scale(1.1);\n    margin: 20px 0;\n  }\n"], ["\n  background: ", ";\n  transition: 250ms;\n  overflow: hidden;\n  border-radius: ", ";\n  transform: ", ";\n  margin: ", ";\n  &:hover {\n    border-radius: 3px;\n    transform: scale(1.1);\n    margin: 20px 0;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var StyledPlayer = styled.div(_templateObject, function (props) {
  return props.theme.colors.cardsBackground;
}, function (props) {
  return props.playing ? "3px" : "0px";
}, function (props) {
  return props.playing ? "scale(1.1)" : "scale(1)";
}, function (props) {
  return props.playing ? "20px 0" : "0";
});

export default StyledPlayer;