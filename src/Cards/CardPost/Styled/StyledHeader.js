// @flow
import styled from "styled-components";

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-top-left-radius: ${({ theme }) => theme.radius.sm};
  border-top-right-radius: ${({ theme }) => theme.radius.sm};
  padding: 10px 15px;
`;

export default StyledHeader;
