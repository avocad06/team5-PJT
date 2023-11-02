import styled from "styled-components";

const StyledBackButton = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(-135deg);
`;

export default function BackButton() {
  return (
    <button>
      <StyledBackButton />
    </button>
  );
}
