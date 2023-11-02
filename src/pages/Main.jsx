import MainText from "../components/MainText";
import SubText from "../components/SubText";
import { StyledWrapper } from "../components/Wrapper";
import Header from "../components/Header";
import Button from "../components/NavigateButton";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <StyledWrapper>
        <SubText content={"오늘 청주에서 할 일을 찾아드립니다 어쩌구"} />
        <MainText content={"오늘 뭐하지? 모해유"} />
        <StyledFooter>
          <Button
            content={"시작하기"}
            onClick={() => navigate("/question/1")}
          />
        </StyledFooter>
      </StyledWrapper>
    </>
  );
}
