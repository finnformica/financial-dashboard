import { Box, Typography, useTheme } from "@mui/material";

const TradePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh" }}>
      <Typography color={theme.palette.text.default} variant="h3">
        Trade
      </Typography>
    </Box>
  );
};

export default TradePage;
