import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: var(--dark-brown-90);
  font-weight: 700;
  margin-bottom: 26px;
`;

export default function PageIndicator() {
  return (
    <StyledParagraph>
      <span>2</span>/<span>5</span>
    </StyledParagraph>
  );
}
