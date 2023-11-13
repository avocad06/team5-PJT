import ShareButton from "../components/ButtonShare";
import { StyledWrapper } from "../components/Wrapper";
import Button from "../components/NavigateButton";
import { StyledFooter } from "./Main";
import { group3 } from "../const/result";
import ResultContent from "../components/ResultContent";
import KakaoMap from "../components/KakaoMap";
import PlayList from "../components/Playlist";
import Header from "../components/Header";
import styled from "styled-components";
import { useGetResult } from "../hooks/useGetResult";

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
  const { resultActivity, handleRandomClick, navigate } = useGetResult();

  return (
    <>
      <Header />
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
      <StyledWrapper>
        <ShareButton />
        <StyledFooter>
          <StyledButtonWrapper>
            <Button
              isCenter={true}
              content={"다시하기"}
              onClick={() => {
                navigate("/");
              }}
            />
            <Button
              isCenter={true}
              content={"랜덤으로 결과보기"}
              onClick={handleRandomClick}
            />
          </StyledButtonWrapper>
        </StyledFooter>
      </StyledWrapper>
    </>
  );
}
