// @flow
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export default FlexContainer;
