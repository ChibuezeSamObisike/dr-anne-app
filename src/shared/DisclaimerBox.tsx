import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ForwardIcon, WarningIcon } from "../assets/svg";

const DisclaimerBox = () => {
  return (
    <Box>
      <WarningIcon />
      <Typography variant='h3'>Disclaimer</Typography>
      <Typography variant='body2'>
        The Drai application is intended to provide general information and
        preliminary medical advice only. It is not a substitute for professional
        medical advice, diagnosis, or treatment.{" "}
      </Typography>

      <Button sx={{ color: "#4F7A21" }}>
        Continue <ForwardIcon />
      </Button>
    </Box>
  );
};

export default DisclaimerBox;
