import styled from "styled-components";
import BackButton from "./BackButton";
import Logo from "../components/Logo";

/**
 * Header Props
 * {
 * isWhite: boolean,
 * isLogoHeader: boolean,
 *  }
 */

const StyledHeader = styled.div`
  box-sizing: border-box;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => props.$bgColor || "transparent"};
`;

export default function Header({ color, isLogoHeader }) {
  return (
    <StyledHeader $bgColor={color}>
      {isLogoHeader && <Logo />}
      {!isLogoHeader && <BackButton />}
    </StyledHeader>
  );
}
