import styled from "styled-components";

/* props
 * content: string;
 */

const StyledText = styled.h2`
  color: var(--brown-90);
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export default function MainText({ content }) {
  return <StyledText>{content}</StyledText>;
}
