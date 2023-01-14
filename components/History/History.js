import { Box, Typography, IconButton, useTheme, Grid } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { exampleHistoryData } from "./exampleHistoryData";

const History = () => {
  const theme = useTheme();

  const gridHeaders = ["Time", "Type", "Price", "Amount", "Completed", "Total"];

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Box sx={{ display: "flex", mb: 1 }}>
        <Typography color="text.default" variant="h6" sx={{ flex: 1 }}>
          Trade history
        </Typography>
        <IconButton aria-label="refresh price feed" sx={{ p: 0, px: 0.5 }}>
          <RefreshRoundedIcon
            sx={{ color: theme.palette.text.default, opacity: 0.3 }}
          />
        </IconButton>
      </Box>
      <Grid
        container
        spacing={1.25}
        columns={6}
        sx={{ mx: "auto", my: "auto" }}
      >
        {gridHeaders.map((item, id) => (
          <Grid key={id} item xs={1}>
            <Typography variant="caption" color="grey.500">
              {item}
            </Typography>
          </Grid>
        ))}

        {exampleHistoryData.map((item, id) => (
          <>
            <Grid item xs={1} sx={{ pt: 0 }}>
              <Typography color="text.default" fontSize={14}>
                {item.time}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ pt: 0 }}>
              <Typography
                color={item.type === "buy" ? "success.main" : "warning.main"}
                fontSize={14}
              >
                {item.type.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ pt: 0 }}>
              <Typography
                fontSize={14}
                color={item.type === "buy" ? "success.main" : "warning.main"}
              >
                ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ pt: 0 }}>
              <Typography color="text.default" fontSize={14}>
                {item.amount}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ pt: 0 }}>
              <Typography color="text.default" fontSize={14}>
                {item.completed}
              </Typography>
            </Grid>
            <Grid item sx={{ pt: 0 }}>
              <Typography color="text.default" fontSize={14}>
                {item.total}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default History;
