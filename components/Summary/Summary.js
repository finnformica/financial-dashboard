import { Box, Typography, useTheme } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SummarySpinner from "./SummarySpinner";

const Summary = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 2, pt: 1 }}>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Typography sx={{ flex: 1 }} variant="h6">
          Trade overview
        </Typography>
        <RefreshRoundedIcon sx={{ color: theme.palette.text.default }} />
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* <Typography fontWeight={500}>1.4356234</Typography>{" "}
        <Typography variant="caption" color="grey.500">
          BTC
        </Typography> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: { xs: 2, lg: 5 },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <SummarySpinner mode="earnings" value={31432.01} />
        <SummarySpinner mode="losses" value={-22387.45} />
      </Box>
    </Box>
  );
};

export default Summary;
