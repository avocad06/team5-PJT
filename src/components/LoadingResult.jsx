import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import styled from "styled-components";
import MainText from "./MainText";

const StyledLoadingBox = styled.div`
  width: 316px;
  height: 200px;
  background-color: var(--beige-90);
  display: flex;
  align-items: end;
  justify-content: center;
  border-radius: 15px;
  padding-bottom: 36px;
`;

export default function LoadingResult() {
  const [open, _] = useState(true);

  return (
    <>
      <Backdrop open={open} sx={{ backdropFilter: "blur(3px)" }}>
        <StyledLoadingBox>
          <div className="rainbow"></div>
          <MainText content={"뭐할까유~"} />
        </StyledLoadingBox>
      </Backdrop>
    </>
  );
}
