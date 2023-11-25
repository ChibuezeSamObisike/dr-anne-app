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
  const [questionAndAnswer, setQuestionAnswer] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([{ question: "", answer: "" }]);

  const mutation = useMutation({
    mutationFn: (message: string) => {
      return http.post("chat/", message);
    },
  });

  const history = useQuery({
    queryKey: ["history"],
    queryFn: () => http.get("history"),
  });

  useEffect(() => {
    console.log("History Obj", history);
  }, [history]);

  return (
    <Box>
      <Navbar />
      <SingleChatBlock />
      {/* <ButtomDialog /> */}
      <Box display='flex' alignItems='center' justifyContent='center'>
        <BottomInput mutation={mutation} />
      </Box>
    </Box>
  );
}

export default App;
