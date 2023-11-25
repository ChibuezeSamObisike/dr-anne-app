import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ChatUserIcon } from "../assets/svg";

const SingleChatBlock = () => {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box display='flex' alignItems='flex-start' width='70%'>
        <ChatUserIcon />
        <Typography ml={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet.
        </Typography>
      </Box>
    </Container>
  );
};

export default SingleChatBlock;
