import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ForwardIcon } from "../assets/svg";
import InfoIcon from "@mui/icons-material/Info";

import { SyncLoader } from "react-spinners";

const BottomInput: React.FC<any> = ({ mutation, onChange, question }: any) => {
  const supportItem = [
    {
      title: "/help",
      description: "Get information on using the chatbot",
    },
    {
      title: "/info",
      description: "Learn more about the chatbot and its capabilities",
    },
    {
      title: "/clear",
      description: "Clear conversation history and start a new session",
    },
    {
      title: "/exit",
      description: "End the conversation",
    },
  ];

  const [openHelpModal, setOpenHelpModal] = useState(false);

  useEffect(() => {
    if (question.includes("/")) {
      setOpenHelpModal(true);
    } else {
      setOpenHelpModal(false);
    }
  }, [question]);

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
      <Box position='relative' sx={{ width: "100%" }}>
        {openHelpModal && (
          <Box
            height='307px'
            width='358px'
            overflow='auto'
            bgcolor='#fff'
            zIndex={999}
            position='absolute'
            border='1px solid #E4E4E7'
            borderRadius='12px'
            p={3}
            mb={2}
            sx={{
              bottom: 90,
              left: 0,
            }}
          >
            {supportItem.map((item) => (
              <Box
                sx={{
                  ":hover": {
                    bgcolor: "#F4F4F5",
                  },
                  cursor: "pointer",
                }}
                p={3}
                borderRadius='8px'
                mb={2}
                onClick={() => onChange(item.title)}
              >
                <Typography>{item.title}</Typography>
                <Typography color='#70707B'>{item.description}</Typography>
              </Box>
            ))}
          </Box>
        )}
        <TextField
          value={question}
          onChange={(e) => {
            onChange(e?.target?.value);
          }}
          placeholder='Please describe your symptoms'
          variant='outlined'
          sx={{ p: 3 }}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {" "}
                <Button
                  sx={{ py: 2, bgcolor: "#4F7A21" }}
                  onClick={() => mutation.mutate({ message: question })}
                >
                  {mutation.isPending ? (
                    <Typography
                      sx={{
                        color: "red",
                      }}
                    >
                      <SyncLoader />
                    </Typography>
                  ) : (
                    <ForwardIcon />
                  )}
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Typography>
        Drai is not always accurate, so be sure to verify with your physician
      </Typography>
    </Box>
  );
};

export default BottomInput;
