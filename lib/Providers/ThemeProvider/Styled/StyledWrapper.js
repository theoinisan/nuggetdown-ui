var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  font-family: ", ";\n  color: ", ";\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n"], ["\n  background: ", ";\n  font-family: ", ";\n  color: ", ";\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var StyledWrapper = styled.div(_templateObject, function (props) {
  return props.theme.colors.background;
}, function (props) {
  return props.theme.fonts.primary;
}, function (props) {
  return props.theme.colors.text;
});

export default StyledWrapper;