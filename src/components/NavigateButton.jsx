import Button from "@mui/material/Button";

/* Props {
  content: string;
  // 클릭되었는가? isClicked는 state로 관리하는 게 맞는가?
  isClicked: boolean
  onClick: () => void;
} 
 */

export default function NavigateButton({ content, selectedColor, onClick }) {
  return (
    <Button
      variant="contained"
      sx={{
        display: "inline-block",
        textAlign: "center",
        overflowX: "hidden",
        minWidth: "40%",
        fontWeight: "700",
        fontSize: "20px",
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: selectedColor ?? "var(--light-green-90)",
        ":hover": {
          bgcolor: "var(--green-50)",
        },
        ":active": {
          bgcolor: "var(--green-30)",
        },
      }}
      onClick={onClick}
    >
      {content}
    </Button>
  );
}
