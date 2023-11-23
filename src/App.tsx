import { Box } from "@mui/material";
import Navbar from "./components/navbar";
import BottomInput from "./components/BottomInput";
import DefaultPrompt from "./components/DefaultPrompt";
import ButtomDialog from "./components/ButtomDialog";

function App() {
  return (
    <Box>
      <Navbar />
      <DefaultPrompt />
      <ButtomDialog />
      <Box display='flex' alignItems='center' justifyContent='center'>
        <BottomInput />
      </Box>
    </Box>
  );
}

export default App;
