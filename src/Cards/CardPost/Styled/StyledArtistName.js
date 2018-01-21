// @flow
import styled from "styled-components";

const StyledArtistName = styled.h4`
  font-weight: 300;
  font-size: 14px;
  &:before {
    content: "-";
    margin: 0 10px;
  }
`;

export default StyledArtistName;
