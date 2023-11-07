import { Snackbar } from "@mui/material";

export default function SuccessCopySnackbar({ open, onClose }) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={1000}
      message="클립보드에 복사되었습니다."
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{
        "& .MuiSnackbarContent-root": {
          minWidth: "unset",
          backgroundColor: "var(--brown-80)",
        },
      }}
    />
  );
}
