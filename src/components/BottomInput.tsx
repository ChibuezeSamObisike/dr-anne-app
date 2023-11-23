import React from "react";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ForwardIcon } from "../assets/svg";

const BottomInput: React.FC<any> = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "40px",
        marginX: "auto",
        width: { xs: "90%", md: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        placeholder='Please describe your symptoms'
        variant='outlined'
        sx={{ p: 3 }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              {" "}
              <Button sx={{ py: 2, bgcolor: "#4F7A21" }}>
                <ForwardIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />

      <Typography>
        Drai is not always accurate, so be sure to verify with your physician
      </Typography>
    </Box>
  );
};

export default BottomInput;
