import { Box, Typography, useTheme, IconButton } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SummarySpinner from "./SummarySpinner";

const Summary = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 2, pt: 1 }}>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Typography color="text.default" sx={{ flex: 1 }} variant="h6">
          Trade overview
        </Typography>
        <IconButton aria-label="refresh price feed" sx={{ p: 0, px: 0.5 }}>
          <RefreshRoundedIcon sx={{ color: theme.palette.text.default }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: { xs: 3.5, lg: 7.7 },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <SummarySpinner mode="earnings" value={31842.01} percent={90} />
        <SummarySpinner mode="losses" value={-2287.45} percent={13} />
      </Box>
    </Box>
  );
};

export default Summary;
