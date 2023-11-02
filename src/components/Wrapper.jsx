import styled from "styled-components";

// div 는 기본적으로 children 가짐

export const StyledWrapper = styled.div`
  /* box-shadow: inset 0 0 20px blue; */
  /* 아무리 커져봤자 max-width까지만 */
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
`;
function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
