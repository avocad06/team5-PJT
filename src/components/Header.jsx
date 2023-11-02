import styled from "styled-components";
import BackButton from "./BackButton";
import { useParams } from "react-router";
import Logo from "../components/Logo";

const StyledHeader = styled.div`
  height: 40px;
`;

export default function Header() {
  const { id } = useParams();
  return <StyledHeader>{id ? <BackButton /> : <Logo />}</StyledHeader>;
}
