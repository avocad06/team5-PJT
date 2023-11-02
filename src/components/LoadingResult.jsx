import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

export default function LoadingResult() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Backdrop open={open} sx={{ backdropFilter: "blur(3px)" }}>
        <CircularProgress />
      </Backdrop>
    </>
  );
}
