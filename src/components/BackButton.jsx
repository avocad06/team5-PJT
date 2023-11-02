import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledBackButton = styled.button`
  display: inline-block;
  padding: 20px;
  cursor: pointer;
`;

// state 등이 있어서 wrapping을 하면 의미가 있으나 그렇지 않으면 의미가 x
export default function BackButton() {
  const navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      <div
        style={{
          width: "15px",
          height: "15px",
          borderTop: "2px solid #000",
          borderRight: "2px solid #000",
          transform: "rotate(-135deg)",
        }}
      ></div>
    </StyledBackButton>
  );
}
