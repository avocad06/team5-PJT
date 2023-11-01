import { useNavigate } from "react-router-dom";
import ContainedButtons from "../components/Button";
import PageIndicator from "../components/pageIndicator";

export default function Question() {
  const navigate = useNavigate();
  const pageNumger = 2;
  return (
    <>
      <PageIndicator />
      <ContainedButtons
        onClick={() => {
          navigate("/result");
        }}
      />
    </>
  );
}
