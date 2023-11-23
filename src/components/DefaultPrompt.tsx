import React from "react";
import { Box, Typography } from "@mui/material";

const DefaultPrompt = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      textAlign='left'
      justifyContent='center'
      height='65vh'
    >
      <Box mx='auto'>
        <img
          src='https://s3-alpha-sig.figma.com/img/56cf/efe1/fe0b2f8e83dfe8a1b1c9650d6f1a9f83?Expires=1701648000&Signature=L0imLW2Y3qmqDJZkhkVa3H07gPuhihpveK80a12y4vj53rjy-DTxcl7qgrn7Z7pifpu0Zif4zn3bPJRDkHYWOUt5M9e12GoLikcrzOx4rikylbvntw8vMCHZpd7G77FJZ~PHPUJjEc0a17wGwHGMZAP~xxTWuFRgQUWtU-FNn8L4MeT-a-VucUFOY2UfF-QtYkD1eU0YXEIwgTse6X5U9O2s080jv-ilj3rD-UpHUAr3pT0OshZWPSXhlQ78snx4O7pwSxDUC21TUh8rA1~~-JXblX5hfcmqDEgXy93bxnA5e1Gq3RpkBGFbqyq0MRUE9DWT9SmjcjYl1cRwxqmO6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='prompt-img'
          width='56px'
          height='auto'
        />
        <Typography textAlign='left' variant='h3'>
          Hi there, I’m Dr Anne
        </Typography>
        <Typography textAlign='left'>
          Welcome to Drai, your no#1 online health diagnostic platform. How may
          we help you today?
        </Typography>
      </Box>
    </Box>
  );
};

export default DefaultPrompt;
