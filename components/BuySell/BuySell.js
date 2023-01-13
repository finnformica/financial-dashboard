import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

const BuySell = ({ mode }) => {
  return (
    <Box sx={{ p: 2, pt: 1 }}>
      <Typography variant="h6">
        {mode === "buy" ? "Buy" : "Sell"} Coins
      </Typography>
      <TextField
        sx={{ my: 1, width: "100%" }}
        id={`price-input-${mode}`}
        label="Price"
        variant="outlined"
        color={mode === "buy" ? "secondary" : "primary"}
      />
      <TextField
        sx={{ my: 1, width: "100%" }}
        id={`quantity-input-${mode}`}
        label="Amount"
        variant="outlined"
        color={mode === "buy" ? "secondary" : "primary"}
      />
      <Button
        variant="contained"
        sx={{
          background:
            mode === "buy"
              ? "linear-gradient(to right top, #02C5A8, #0765D5)"
              : "linear-gradient(to right top, #EB4774, #C047AF)",
          width: "100%",
          borderRadius: 2,
          textTransform: "none",
          mt: 1,
        }}
      >
        {mode === "buy" ? "Buy" : "Sell"} Coin
      </Button>
    </Box>
  );
};

export default BuySell;
