var _templateObject = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var StyledWrapper = styled.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

export default StyledWrapper;