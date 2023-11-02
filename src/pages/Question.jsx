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

export default function Question() {
  /* id 값이 있을 곳에서만 구조분해할당 해주기 */
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /* 질문 개수 */
  const questionLength = 5;
  const pageNumber = 2;

  const handleLoading = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // 페이지 이동
    navigate("/result");
  };

  const handleClick = () => {
    if (parseInt(id) === questionLength) {
      handleLoading();
      return;
    }

    navigate(`/question/${parseInt(id) + 1}`);
  };

  return (
    <>
      <Header />
      <StyledWrapper>
        <PageIndicator />
        <QuestionText />
        <ChoiceWrapper>
          <Button
            content={"오늘은 혼자 있고 싶어"}
            isSelected={true}
            onClick={handleClick}
          />
          <Button
            content={"오늘은 친구랑 놀고 싶어"}
            isSelected={false}
            onClick={handleClick}
          />
        </ChoiceWrapper>
        {loading && <LoadingResult />}
      </StyledWrapper>
    </>
  );
}
