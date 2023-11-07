import styled from "styled-components";
import BackButton from "./BackButton";
import { useParams } from "react-router";
import Logo from "../components/Logo";

const StyledHeader = styled.div`
  height: 40px;
  padding: 0 40px;
`;

export default function Header() {
  const { questionId } = useParams();
  return <StyledHeader>{questionId ? <BackButton /> : <Logo />}</StyledHeader>;
}
