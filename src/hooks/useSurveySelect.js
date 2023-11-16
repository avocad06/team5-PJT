import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { surveyQuestions } from "../const/Question";
import { getRandomIndex } from "../pages/Result";
import { surveyResults } from "../const/result";
import { useGetResultId } from "./useGetResultId";
import { v4 as uuidv4 } from 'uuid';
import { useGetResult } from "./useGetResult";
import { useYoutubeQuery } from "./useYoutubeQuery";

export function useSurveySelect() {
  const { questionId } = useParams();
  const { dispatchId } = useGetResultId()
  const { getResultQuery } = useGetResult()

  const [activityQuery, setActivityQuery] = useState(null)

  const apiQuery = useYoutubeQuery({
    query: activityQuery,
    options: {
      enabled: !!activityQuery,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5
    }
  })

  const SESSION_SELECTED_OPTIONS_KEY = "selectOptions";

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const questionLength = 5;

  const targetQuestionCount = parseInt(questionId);

  const totalQuestionCount = surveyQuestions.length;

  useEffect(() => {
    const savedSelectedOptions = sessionStorage.getItem(
      SESSION_SELECTED_OPTIONS_KEY
    );

    const savedLastIndex =
      savedSelectedOptions && JSON.parse(savedSelectedOptions).length;

    if (!savedLastIndex) return navigate("/question/1");

    questionId - savedLastIndex > 1 &&
      navigate(`/question/${savedLastIndex + 1}`);
  }, [questionId]);

  const handleLoading = async () => {
    setLoading(true);
    const resultId = getResult();
    console.log(resultId);
    dispatchId(resultId)
    const query = getResultQuery(resultId);
    setActivityQuery(query)
    sessionStorage.removeItem(SESSION_SELECTED_OPTIONS_KEY);
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // 페이지 이동
    navigate(`/result/${uuidv4()}`);
  };

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

    // 1. 마지막 글자에 따라 실내인지 실외인지 확인한다
    const isOutside = resultCharacter.charAt(resultCharacter.length - 1);
    // 2. MBTI와 실내/외가 일치하는지 확인한다
    const character = resultCharacter.slice(0, 4);
    // 3. 일치한다면, 해당 MBTI를 가진 활동을 모아, 랜덤 리스트를 만든다.
    const randomList =
      isOutside === character.charAt(0)
        ? surveyResults
          .filter((result) => result.characterGroup.includes(character))
          .map((activity) => activity.id)
        : // 4. 일치하지 않는다면, 현재 날씨가 들어간 활동을 모아, 랜덜 리스트를 만든다.
        surveyResults
          .filter((result) =>
            isOutside === "E" ? result.isOutside : !result.isOutside
          )
          .map((activity) => activity.id);
    // 5. 랜덤 결과를 출력한다.
    const nextResultId = getRandomIndex(randomList);
    return nextResultId;
  }

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

  const selectedIndex =
    sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY) &&
    JSON.parse(sessionStorage.getItem(SESSION_SELECTED_OPTIONS_KEY))?.find(
      (option) => option.questionId === parseInt(questionId)
    )?.selectedOption;

  const questionContent = surveyQuestions.find(
    (q) => q.id + 1 === parseInt(questionId)
  ).surveyContent;

  const optionsContent = surveyQuestions.find(
    (q) => q.id + 1 === parseInt(questionId)
  )?.optionContents;

  return {
    loading,
    selectedIndex,
    questionContent,
    optionsContent,
    handleOptionClick,
    targetQuestionCount,
    totalQuestionCount,
  };
}
