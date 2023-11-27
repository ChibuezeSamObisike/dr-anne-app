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

  // const history = useQuery({
  //   queryKey: ["history"],
  //   queryFn: () => http.get("history/"),
  // });

  return (
    <Box>
      <Navbar />
      <SingleChatBlock
        isLoading={mutation.isPending}
        question={question}
        answer={answer}
      />
      {/* <ButtomDialog /> */}
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
