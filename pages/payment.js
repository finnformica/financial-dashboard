import { Box, Typography, useTheme } from "@mui/material";

const PaymentPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100vh" }}>
      <Typography color={theme.palette.text.default} variant="h3">
        Payment
      </Typography>
    </Box>
  );
};

export default PaymentPage;
