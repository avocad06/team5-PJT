import ShareButton from "../components/ButtonShare";
import { StyledWrapper } from "../components/Wrapper";
import Button from "../components/NavigateButton";
import { StyledFooter } from "./Main";
import { group3 } from "../const/result";
import ResultContent from "../components/ResultContent";
import KakaoMap from "../components/KakaoMap";
import PlayList from "../components/PlayList";
import Header from "../components/Header";
import styled from "styled-components";
import { useGetResult } from "../hooks/useGetResult";

export function getRandomIndex(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const StyledButtonWrapper = styled.div`
  display: flex;
  min-width: 520px;
  flex-direction: column;
  gap: 15px;
  padding-top: 22px;
  padding-bottom: 23px;
`;

export default function Result() {
  const { resultActivity, handleRandomClick, navigate } = useGetResult();

  return (
    <>
      <Header color={"#FFFFFF"} isLogoHeader={true} />
      <ResultContent result={resultActivity} />
      {!!resultActivity.isOutside && (
        <KakaoMap query={resultActivity.activityName} size={[400, 400]} />
      )}
      {!resultActivity.isOutside && (
        <PlayList
          multiplePlayList={resultActivity.characterGroup === group3}
          query={resultActivity.activityName}
        />
      )}
      <ShareButton />
      <StyledFooter>
        <StyledWrapper>
          <StyledButtonWrapper>
            <Button
              isCenter={true}
              content={"다시하기"}
              onClick={() => {
                navigate("/question/1");
              }}
            />
            <Button
              isCenter={true}
              content={"랜덤으로 결과보기"}
              onClick={handleRandomClick}
            />
          </StyledButtonWrapper>
        </StyledWrapper>
      </StyledFooter>
    </>
  );
}
