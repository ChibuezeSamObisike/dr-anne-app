import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { ChatUserIcon } from "../assets/svg";
import drAnnIcon from "../assets/Female Doctor 1.png";

import { SyncLoader } from "react-spinners";

const SingleChatBlock = ({ question, answer, isLoading, role }: any) => {
  console.log("Is loading", isLoading);
  return (
    <>
      {question && (
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='70%'
          >
            <Box width='40px'>
              {role && role !== "user" ? (
                <img src={drAnnIcon} alt='dr icon' />
              ) : (
                <ChatUserIcon />
              )}
            </Box>
            <Typography sx={{ width: "80%" }} ml={3}>
              {question}
            </Typography>
          </Box>
        </Container>
      )}

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Box
          display='flex'
          alignItems='flex-start'
          width='70%'
          justifyContent='space-between'
        >
          {isLoading || !answer ? null : (
            <Box width='40px'>
              {" "}
              {role && role !== "assistant" ? (
                <ChatUserIcon />
              ) : (
                <img src={drAnnIcon} alt='dr icon' />
              )}
            </Box>
          )}
          {isLoading ? (
            <SyncLoader />
          ) : (
            <Typography
              component='div'
              sx={{ marginRight: "50px", width: "80%" }}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default SingleChatBlock;
