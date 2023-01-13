import {
  Box,
  Fab,
  Typography,
  CircularProgress,
  useTheme,
} from "@mui/material";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

const SummarySpinner = ({ mode, value }) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", textAlign: "center" }}>
      {mode === "earnings" ? (
        <ArrowCircleUpRoundedIcon sx={{ color: theme.palette.success.main }} />
      ) : (
        <ArrowCircleDownRoundedIcon
          sx={{ color: theme.palette.warning.main }}
        />
      )}

      <CircularProgress
        size={68}
        variant="determinate"
        value={75}
        color={mode === "earnings" ? "success" : "warning"}
        sx={{
          position: "absolute",
          top: -22,
          left: -22,
          zIndex: 1,
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          top: { xs: -10, lg: 60 },
          left: { xs: 70, lg: -12 },
        }}
        variant="caption"
        color="grey.500"
      >
        {mode === "earnings" ? "Earnings" : "Losses"}
      </Typography>

      {value >= 0 ? (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: 10, lg: 85 },
            left: { xs: 70, lg: -30 },
          }}
        >
          ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
      ) : (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: 10, lg: 85 },
            left: { xs: 70, lg: -30 },
          }}
        >
          -${(value * -1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
      )}
    </Box>
  );
};

export default SummarySpinner;
