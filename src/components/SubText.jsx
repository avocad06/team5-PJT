import styled from "styled-components";

const StyledText = styled.p`
  color: var(--medium-gray-90);
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export default function SubText({ content }) {
  return <StyledText>{content}</StyledText>;
}
