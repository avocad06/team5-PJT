import MainText from "../components/MainText";
import SubText from "../components/SubText";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Wrapper>
        <SubText content={"오늘 청주에서 할 일을 찾아드립니다 어쩌구"} />
        <MainText content={"오늘 뭐하지? 모해유"} />
      </Wrapper>
    </>
  );
}
