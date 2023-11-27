import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import BottomInput from "./components/BottomInput";
import DefaultPrompt from "./components/DefaultPrompt";
import ButtomDialog from "./components/ButtomDialog";
import SingleChatBlock from "./components/SingleChatBlock";
import http from "./config/http";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [openDisclaimer, setOpenDisclaimer] = useState(true);

  const mutation = useMutation({
    mutationFn: (message: Object) => {
      console.log("The message is here", message);
      return http.post("chat/", message);
    },
    onSuccess(data) {
      console.log("Data", data);
      setAnswer(data?.data?.reply);
      setQuestion("");
    },
    onError(error) {
      console.log("Error", error);
    },
  });

  const history = useQuery({
    queryKey: ["history"],
    queryFn: () => http.get("history/"),
  });

  console.log("history", history.data?.data?.messages);

  return (
    <Box>
      <Navbar />

      <Box height='60vh' overflow='auto'>
        {history.data?.data?.messages.map((historyItem: any) => {
          return (
            <SingleChatBlock
              answer={historyItem.content}
              role={historyItem.role}
            />
          );
        })}
      </Box>
      <Box p={3}>
        <SingleChatBlock
          isLoading={mutation.isPending}
          question={question}
          answer={answer}
        />
      </Box>
      {openDisclaimer && <ButtomDialog setOpenDisclaimer={setOpenDisclaimer} />}
      <Box display='flex' alignItems='center' justifyContent='center'>
        <BottomInput
          mutation={mutation}
          onChange={setQuestion}
          question={question}
        />
      </Box>
    </Box>
  );
}

export default App;
