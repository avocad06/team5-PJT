import { useNavigate } from "react-router-dom";
import ContainedButtons from "../components/Button";
import RainbowLogo from "../components/Logo";
import RetestButton from "../components/Button_retest";
import RandomButton from "../components/Button_random";
import ShareButton from "../components/Button_share";
import Wrapper from "../components/Wrapper";

export default function Result() {
  const navigate = useNavigate();
  const pageNumger = 7;
  return (
    <Wrapper>
      <RainbowLogo />
      <RetestButton
        onClick={() => {
          navigate("/");
        }}
      />
      <RandomButton />
      <ShareButton />
    </Wrapper>
  );
}
