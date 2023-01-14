import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  TextField,
} from "@mui/material";

const PaymentPage = () => {
  const theme = useTheme();

  return (
    <Container
      fixed
      sx={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.light,
          border: `1.5px ${theme.palette.background.border} solid`,
          height: "500px",
          width: "500px",
        }}
      >
        <Typography variant="h4" color="text.default">
          Payment
        </Typography>
        <Box sx={{ height: "95%", px: 4, mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "60%",
            }}
          >
            <TextField variant="filled" size="small" label="Cardholder name" />
            <TextField variant="filled" size="small" label="Card number" />
            <Box sx={{ display: "flex" }}>
              <TextField
                sx={{ pr: 2 }}
                variant="filled"
                size="small"
                label="Expiration date"
              />
              <TextField width={50} variant="filled" size="small" label="CVV" />
            </Box>
          </Box>
          <Button
            disabled
            variant="contained"
            size="large"
            sx={{
              background: "linear-gradient(to right top, #EB4774, #BF48AF)",
              width: "100%",
              borderRadius: 2,
              textTransform: "none",
              mt: 5,
              fontSize: 16,
            }}
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentPage;
