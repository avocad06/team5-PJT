import styled from "styled-components";
import { useUrlBack } from "../hooks/useURLBack";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 15px;
  padding-right: 40px;
  cursor: pointer;
`;

// state 등이 있어서 wrapping을 하면 의미가 있으나 그렇지 않으면 의미가 x
export default function BackButton() {
  const { handleClickBack } = useUrlBack();

  return (
    <StyledButton onClick={handleClickBack}>
      <div
        style={{
          width: "28px",
          height: "28px",
          borderTop: "6.2px solid #fff",
          borderRight: "6.2px solid #fff",
          transform: "rotate(-135deg)",
          borderRadius: "2px",
        }}
      ></div>
    </StyledButton>
  );
}
