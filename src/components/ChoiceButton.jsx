import { Button } from "@mui/material";
import styled from "styled-components";

const StyledChoiceButton = styled.button`
  display: block;
  background-color: var(--primary-main);
  color: #ffff;
`;

/* Props {
  content: string;
  // 클릭되었는가? isClicked는 state로 관리하는 게 맞는가?
  isClicked: boolean
  onClick: () => void;
} 
 */

export default function ChoiceButton({ content, isClicked, onClick }) {
  return (
    <Button
      variant="contained"
      fullWidth={true}
      sx={{
        fontWeight: "700",
        fontSize: "20px",
        padding: "16px",
        borderRadius: "16px",
        height: "68px",
        backgroundColor: isClicked ? "var(--green-30)" : "var(--green-90)",
        ":hover": {
          bgcolor: "var(--green-50)",
        },
        ":active": {
          bgcolor: "var(--green-30)",
        },
      }}
      onClick={() => {
        onClick();
      }}
    >
      {content}
    </Button>
  );
}
