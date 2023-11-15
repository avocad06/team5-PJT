import MainText from "../components/MainText";
import SubText from "../components/SubText";
import { StyledWrapper } from "../components/Wrapper";
import Header from "../components/Header";
import Button from "../components/NavigateButton";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { StyledImageWrapper } from "../components/ResultContent";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

const StyledMainContent = styled.section`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  max-width: 520px;
  inset: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: calc(100% - 250px);
`;

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header isLogoHeader={true} />
      <StyledMainContent>
        <StyledWrapper>
          <SubText content={"오늘 청주에서 할 일을 찾아드립니다"} />
          <MainText content={"오늘 뭐하지? 모해유"} />
          <StyledImageWrapper>
            <img
              src={"/images/main.png"}
              alt={"메인 이미지"}
              style={{
                marginTop: "22px",
                marginBottom: "48px",
              }}
            />
          </StyledImageWrapper>

          <StyledFooter>
            <Button
              isCenter={true}
              content={"시작하기"}
              onClick={() => navigate("/question/1")}
            />
          </StyledFooter>
        </StyledWrapper>
      </StyledMainContent>
    </>
  );
}
