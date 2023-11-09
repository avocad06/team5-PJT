import { useNavigate, useParams } from "react-router-dom";
import RainbowLogo from "../components/Logo";
import ShareButton from "../components/ButtonShare";
import { StyledWrapper } from "../components/Wrapper";
import Button from "../components/NavigateButton";
import { StyledFooter } from "./Main";
import { useState } from "react";
import { surveyResults } from "./Question";
import ResultContent from "../components/ResultContent";
import KakaoMap from "../components/KakaoMap";
import PlayList from "../components/Playlist";
import Header from "../components/Header";
import styled from "styled-components";

export function getRandomIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function Result() {
  const navigate = useNavigate();
  const { resultId } = useParams();

  const allResult = surveyResults.map((result) => result.id + 1);

  const [resultHistory, setResultHistory] = useState([parseInt(resultId)]);

  const handleRandomClick = () => {
    const undisplayedResult = allResult.reduce((prev, current) => {
      if (parseInt(resultId) === current) return prev;

      if (resultHistory.includes(current)) {
        return prev;
      }
      return [...prev, current];
    }, []);

    const nextResultId = getRandomIndex(
      (!!undisplayedResult.length && undisplayedResult) ||
        allResult.filter((r) => r !== parseInt(resultId))
    );

    setResultHistory(
      undisplayedResult.length === 0
        ? [nextResultId]
        : [...resultHistory, nextResultId]
    );
    navigate(`/result/${nextResultId}`);
  };

  console.log(surveyResults);

  return (
    <>
      <Header />
      <ResultContent
        result={surveyResults.find((result) => resultId - 1 === result.id)}
      />
      <KakaoMap size={[400, 400]} />
      <PlayList query={"청소 플레이리스트"} />
      <StyledWrapper>
        <ShareButton />
        <StyledFooter>
          <StyledButtonWrapper>
            <Button
              content={"다시하기"}
              onClick={() => {
                navigate("/");
              }}
            />
            <Button content={"랜덤으로 결과보기"} onClick={handleRandomClick} />
          </StyledButtonWrapper>
        </StyledFooter>
      </StyledWrapper>
    </>
  );
}
