import { useNavigate, useParams } from "react-router-dom";
import ContainedButtons from "../components/Button";
import PageIndicator from "../components/pageIndicator";
import QuestionText from "../components/QuestionText";
import Wrapper from "../components/Wrapper";
import ChoiceButton from "../components/ChoiceButton";
import LoadingResult from "../components/LoadingResult";
import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";

const ChoiceWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export default function Question() {
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

    navigate(`/:${parseInt(id) + 1}`);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <PageIndicator />
        <QuestionText />
        <ChoiceWrapper>
          <ChoiceButton
            content={"오늘은 혼자 있고 싶어"}
            isClicked={true}
            onClick={handleClick}
          />
          <ChoiceButton
            content={"오늘은 친구랑 놀고 싶어"}
            isClicked={false}
            onClick={handleClick}
          />
        </ChoiceWrapper>
        {loading && <LoadingResult />}
      </Wrapper>
    </>
  );
}
