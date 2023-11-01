import styled from "styled-components";
const StyledParagraph = styled.p`
  color: var(--primary-main);
  font-weight: 700;
`;

export default function PageIndicator() {
  return (
    <StyledParagraph>
      <span>2</span>/<span>5</span>
    </StyledParagraph>
  );
}
