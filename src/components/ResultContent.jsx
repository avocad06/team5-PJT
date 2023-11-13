import styled from "styled-components";
import MainText from "./MainText";
import SubText from "./SubText";
import { StyledWrapper } from "./Wrapper";

export const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

export default function ResultContent({ result }) {
  const { imageUrl, activityName } = result;
  return (
    <section style={{ backgroundColor: "white" }}>
      <StyledWrapper>
        <SubText content={"오늘 청주에서 할 일을 추천드려요!"} />
        <StyledImageWrapper>
          <img src={imageUrl} alt={`${activityName} 이미지`} width={"300px"} />
        </StyledImageWrapper>
        <MainText content={activityName} />
      </StyledWrapper>
    </section>
  );
}
