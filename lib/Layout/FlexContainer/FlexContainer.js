var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var FlexContainer = styled.div(_templateObject, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
});

export default FlexContainer;