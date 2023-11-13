import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: var(--dark-brown-90);
  font-weight: 700;
  margin-bottom: 26px;
`;

export default function PageIndicator({ targetPage, lastPage }) {
  return (
    <StyledParagraph>
      <span>{targetPage}</span>/<span>{lastPage}</span>
    </StyledParagraph>
  );
}
