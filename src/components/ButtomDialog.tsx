import React from "react";
import { Box, Drawer } from "@mui/material";
import DisclaimerBox from "../shared/DisclaimerBox";
import useSmallScreen from "../hooks/useSmallScreen";

const ButtomDialog = () => {
  const isSmallScreen = useSmallScreen();
  if (isSmallScreen) {
    return (
      <Drawer
        anchor='bottom'
        open={true}
        sx={{
          borderRadius: "10px",
          "& > .css-9emuhu-MuiPaper-root-MuiDrawer-paper": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
        }}
      >
        <Box p={3} borderRadius='4px'>
          <DisclaimerBox />
        </Box>
      </Drawer>
    );
  }
  return (
    <Box
      height='100vh'
      position='fixed'
      sx={{
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 1000,
        bgcolor: "#00000052",
        backdropFilter: "blur(7px)",
      }}
    >
      <Box
        sx={{ position: "absolute", right: 20, bottom: 40, zIndex: 999 }}
        width='300px'
        p={3}
        bgcolor='#fff'
        borderRadius='8px'
      >
        <DisclaimerBox />
      </Box>
    </Box>
  );
};

export default ButtomDialog;
