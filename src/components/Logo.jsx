import styled from "styled-components";
import { StyledButton } from "./BackButton";
import { useNavigate } from "react-router-dom";

const LogoContainer = styled.div`
  font-family: "Sniglet", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 18;
  word-wrap: "break-word";
  display: inline;
`;

const RainbowText = styled.span`
  color: ${(props) => props.color};
`;

function RainbowLogo() {
  const text = "MOHEYOU";

  return (
    <LogoContainer>
      {text.split("").map((char, index) => (
        <RainbowText key={index} color={getDesiredColor(char)}>
          {char}
        </RainbowText>
      ))}
    </LogoContainer>
  );
}

function App() {
  return (
    <div className="App">
      <RainbowLogo />
    </div>
  );
}

const StyledLogo = styled.h1`
  font-family: "Sniglet", sans-serif;
  color: var(--brown-90);
  padding-left: 80px;
  font-weight: 500;
`;

const StyledAccent = styled.span`
  color: var(--green-90);
`;

export default function Logo() {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => navigate("/")}>
      <StyledLogo>
        MO<StyledAccent>HE</StyledAccent>YOU
      </StyledLogo>
    </StyledButton>
  );
}

function getDesiredColor(char) {
  if (
    char === "M" ||
    char === "O" ||
    char === "Y" ||
    char === "O" ||
    char === "U"
  ) {
    return "#5D2A0C"; // MO, YOU 문자에 원하는 색상 적용
  } else if (char === "H" || char === "E") {
    return "#80BE26"; // HE 문자에 원하는 색상 적용
  } else {
    return "black"; // 기본 색상
  }
}

// export default App;
