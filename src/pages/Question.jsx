import { useNavigate, useParams } from "react-router-dom";
import PageIndicator from "../components/pageIndicator";
import QuestionText from "../components/QuestionText";
import { StyledWrapper } from "../components/Wrapper";
import LoadingResult from "../components/LoadingResult";
import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/NavigateButton";

const ChoiceWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const surveyQuestions = [
  {
    id: 0,
    surveyContent: "오늘 당신의 기분은?",
    optionContents: [
      {
        id: 0,
        content: "오늘은 시끌벅적하게 놀고 싶어!",
      },
      {
        id: 1,
        content: "조용한 휴식이 필요해!",
      },
    ],
    selectResult: ["E", "I"],
  },
  {
    id: 1,
    surveyContent: "노래를 들을 때 무엇을 더 선호하나요?",
    optionContents: [
      {
        id: 0,
        content: "멜로디가 좋으면 좋은 노래지!",
      },
      {
        id: 1,
        content: "가사가 마음에 들면 완벽해!",
      },
    ],
    selectResult: ["N", "S"],
  },
  {
    id: 2,
    surveyContent: "슬픔을 반으로 나누면?",
    optionContents: [
      {
        id: 0,
        content: "슬과 픔",
      },
      {
        id: 1,
        content: "반이 된다",
      },
    ],
    selectResult: ["T", "F"],
  },
  {
    id: 3,
    surveyContent:
      "여행을 떠나려는 당신! 다음 중 당신과 더 잘 맞는 것은 무엇인가요?",
    optionContents: [
      {
        id: 0,
        content: "정확한 일정과 목표를 세우는 게 편해!",
      },
      {
        id: 1,
        content: "그때그때 상황에 맞게 결정하며 융통성 있게 즐기려고 노력해!",
      },
    ],
    selectResult: ["J", "P"],
  },
  {
    id: 4,
    surveyContent: "오늘의 날씨와 가장 가까운 이모티콘을 골라주세요!",
    optionContents: [
      {
        id: 0,
        content: "맑음",
      },
      {
        id: 1,
        content: "흐림",
      },
      {
        id: 2,
        content: "비",
      },
      {
        id: 3,
        content: "눈",
      },
    ],
    selectResult: ["E", "I"],
  },
];

export default function Question() {
  /* id 값이 있을 곳에서만 구조분해할당 해주기 */
  const { questionId } = useParams();

  const SESSION_SELECTED_OPTIONS_KEY = "selectOptions";

  const [loading, setLoading] = useState(false);
  /* 답변 저장 state */
  const [selectedOptions, setSelectedOptions] = useState(false);
  const navigate = useNavigate();

  /* 질문 개수 */
  const questionLength = 5;

  const handleLoading = async () => {
    setLoading(true);
    getResult();
    sessionStorage.removeItem(SESSION_SELECTED_OPTIONS_KEY);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 페이지 이동
    navigate("/result/1");
  };

  const choiceButtons = surveyQuestions.find(
    (q) => q.id + 1 === parseInt(questionId)
  )?.optionContents;

  const handleOptionClick = (index) => {
    const getStorage = sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY);

    if (!getStorage) {
      sessionStorage.setItem(
        SESSION_SELECTED_OPTIONS_KEY,
        JSON.stringify([
          {
            questionId: parseInt(questionId),
            selectedOption: index,
          },
        ])
      );
    }

    // 2. 가져온 값 중에 현재 질문에 답변한 객체가 있는지 확인한다.
    if (getStorage) {
      const prevData = JSON.parse(getStorage);
      const prevOption = prevData.find(
        (option) => option.questionId === parseInt(questionId)
      );

      // 3. 있다면, 해당 객체를 수정하고, 없다면 추가하도록 구현
      const nextOptions = prevOption
        ? prevData.map((option) =>
            option.questionId === prevOption.questionId
              ? {
                  ...option,
                  selectedOption: index < 2 ? index : 1,
                }
              : option
          )
        : [
            ...prevData,
            {
              questionId: parseInt(questionId),
              selectedOption: index < 2 ? index : 1,
            },
          ];

      sessionStorage.setItem(
        SESSION_SELECTED_OPTIONS_KEY,
        JSON.stringify(nextOptions)
      );
    }

    if (parseInt(questionId) === questionLength) {
      handleLoading();
      return;
    }

    navigate(`/question/${parseInt(questionId) + 1}`);
  };

  const buttonSelected =
    sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY) &&
    JSON.parse(sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY))?.find(
      (option) => option.questionId === parseInt(questionId)
    )?.selectedOption;

  function getResult() {
    const getStorage = sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY);

    if (!getStorage) navigate(`/question/1}`);

    const resultCharacter = JSON.parse(getStorage).reduce((prev, current) => {
      const question = surveyQuestions.find(
        (q) => q.id + 1 === current.questionId
      );
      return prev + question.selectResult[current.selectedOption];
    }, "");
    console.log(resultCharacter);
  }

  return (
    <>
      <Header />
      <StyledWrapper>
        <PageIndicator lastPage={surveyQuestions.length} />
        <QuestionText
          content={
            surveyQuestions.find((q) => q.id + 1 === parseInt(questionId))
              .surveyContent
          }
        />
        <ChoiceWrapper>
          {choiceButtons.map((option, index) => (
            <Button
              key={option.id}
              content={option.content}
              isSelected={buttonSelected === index}
              onClick={() => handleOptionClick(index)}
            />
          ))}
        </ChoiceWrapper>
        {loading && <LoadingResult />}
      </StyledWrapper>
    </>
  );
}
