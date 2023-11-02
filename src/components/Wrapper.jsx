import styled from "styled-components";

const StyledWrapper = styled.div`
  /* box-shadow: inset 0 0 20px blue; */
  /* 아무리 커져봤자 max-width까지만 */
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
`;
export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
