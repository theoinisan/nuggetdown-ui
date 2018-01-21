var _templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  padding: 10px 15px;\n"], ["\n  background: ", ";\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  padding: 10px 15px;\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";

var StyledHeader = styled.div(_templateObject, function (props) {
  return props.theme.colors.backgroundSecondary;
});

export default StyledHeader;