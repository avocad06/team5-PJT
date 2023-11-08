import MainText from "./MainText";
import SubText from "./SubText";
import { StyledWrapper } from "./Wrapper";

export default function ResultContent({ result }) {
  console.log(result);
  const { imageUrl, activityName } = result;
  return (
    <section style={{ backgroundColor: "white" }}>
      <StyledWrapper>
        <SubText content={"서브텍스트 자리입니다."} />
        <img src={imageUrl} alt={`${activityName} 이미지`} width={"200px"} />
        <MainText content={activityName} />
      </StyledWrapper>
    </section>
  );
}
