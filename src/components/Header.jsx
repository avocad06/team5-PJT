import styled from "styled-components";
import BackButton from "./BackButton";

const StyledHeader = styled.div`
  height: 40px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <BackButton />
    </StyledHeader>
  );
}
