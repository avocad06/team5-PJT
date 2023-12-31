/** Question attribute
 * characterType = 'E' | 'I'
 * {
 * id: number;
 * content: string;
 * character: characterType
 * }
 */

import styled from "styled-components";

const StyledQuestionText = styled.h2`
  font-size: 40px;
  color: var(--brown-90);
  min-height: 240px;
  line-height: 56px;
`;

export default function QuestionText({ content }) {
  return <StyledQuestionText>{content}</StyledQuestionText>;
}
