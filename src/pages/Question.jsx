import PageIndicator from "../components/pageIndicator";
import QuestionText from "../components/QuestionText";
import { StyledWrapper } from "../components/Wrapper";
import LoadingResult from "../components/LoadingResult";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/NavigateButton";
import { surveyQuestions } from "../const/Question";
import { useSurveySelect } from "../hooks/useSurveySelect";

const ChoiceWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export default function Question() {
  /* id 값이 있을 곳에서만 구조분해할당 해주기 */
  const {
    targetQuestionCount,
    totalQuestionCount,
    questionContent,
    optionsContent,
    selectedIndex,
    handleOptionClick,
    loading,
  } = useSurveySelect();

  return (
    <>
      <Header />
      <StyledWrapper>
        <PageIndicator
          targetPage={targetQuestionCount}
          lastPage={totalQuestionCount}
        />
        <QuestionText content={questionContent} />
        <ChoiceWrapper>
          {optionsContent.map((option, index) => (
            <Button
              key={option.id}
              content={option.content}
              selectedColor={
                selectedIndex === index ? "var(--green-30)" : "var(--green-90)"
              }
              onClick={() => handleOptionClick(index)}
              isCenter={targetQuestionCount === totalQuestionCount}
            />
          ))}
        </ChoiceWrapper>
        {loading && <LoadingResult />}
      </StyledWrapper>
    </>
  );
}
