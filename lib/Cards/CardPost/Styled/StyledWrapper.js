var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 3px;\n  margin-bottom: 20px;\n"], ["\n  background: ", ";\n  border-radius: 3px;\n  margin-bottom: 20px;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var StyledWrapper = styled.div(_templateObject, function (props) {
  return props.theme.colors.cardsBackground;
});

export default StyledWrapper;