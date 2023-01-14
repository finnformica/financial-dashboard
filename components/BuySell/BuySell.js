import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import React from "react";

const BuySell = ({ mode }) => {
  return (
    <Box sx={{ p: 2, pt: 1 }}>
      <Typography color="text.default" variant="h6">
        {mode === "buy" ? "Buy" : "Sell"} Coins
      </Typography>
      <TextField
        sx={{ my: 1, width: "100%" }}
        id={`price-input-${mode}`}
        label="Price"
        variant="outlined"
        color={mode === "buy" ? "secondary" : "primary"}
        // size="small"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        sx={{ my: 1, width: "100%" }}
        id={`quantity-input-${mode}`}
        label="Amount"
        variant="outlined"
        color={mode === "buy" ? "secondary" : "primary"}
        // size="small"
        InputProps={{
          endAdornment: <InputAdornment position="end">BTC</InputAdornment>,
        }}
      />
      <Button
        variant="contained"
        sx={{
          background:
            mode === "buy"
              ? "linear-gradient(to right top, #02C5A8, #0765D5)"
              : "linear-gradient(to right top, #EB4774, #BF48AF)",
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
