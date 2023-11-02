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
  margin-bottom: 100px;
`;

export default function QuestionText() {
  return <StyledQuestionText>오늘 나의 기분은?</StyledQuestionText>;
}