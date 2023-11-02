import { useNavigate } from "react-router-dom";
import RainbowLogo from "../components/Logo";
import ShareButton from "../components/ButtonShare";
import { StyledWrapper } from "../components/Wrapper";
import Button from "../components/NavigateButton";
import { StyledFooter } from "./Main";

export default function Result() {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <RainbowLogo />
      <StyledFooter>
        <Button
          content={"다시하기"}
          onClick={() => {
            navigate("/");
          }}
        />
        <Button content={"랜덤으로 결과보기"} />
      </StyledFooter>
      <ShareButton />
    </StyledWrapper>
  );
}
