import { Box, Chip, Container, IconButton, Typography } from "@mui/material";
import { DrIcon, MoonIcon } from "../assets/svg";

const Navbar: React.FC<any> = () => {
  return (
    <Container sx={{ pt: 3 }}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          <DrIcon />
          <Typography sx={{ ml: 1 }}>Drai</Typography>
          <Chip label='Beta' sx={{ ml: 1 }} />
        </Box>

        <IconButton>
          <MoonIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Navbar;
