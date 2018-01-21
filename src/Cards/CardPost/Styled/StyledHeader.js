// @flow
import styled from "styled-components";

const StyledHeader = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 10px 15px;
`;

export default StyledHeader;
