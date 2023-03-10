import { Box, IconButton, Typography, useTheme } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

import { examplePriceFeedData } from "./examplePriceFeedData";

const RowItem = ({ coin, ticker, percent, price }) => {
  const theme = useTheme();
  return (
    <Box sx={{ my: { xs: 0, lg: 2 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Typography color="text.default" fontSize={14}>
          {ticker}
        </Typography>
        {percent >= 0 ? (
          <>
            <Typography fontSize={14} color="success.main">
              +{percent}%
            </Typography>
          </>
        ) : (
          <>
            <Typography fontSize={14} color="warning.main">
              -{percent * -1}%
            </Typography>
          </>
        )}
        <Typography color="text.default" fontSize={14}>
          ${price}
        </Typography>
      </Box>

      <Typography variant="caption" color="grey.500">
        {coin}
      </Typography>
    </Box>
  );
};

const PriceFeed = () => {
  const theme = useTheme();
  return (
    <Box sx={{ p: 2, pt: 1 }}>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Typography color="text.default" variant="h6" sx={{ flex: 1 }}>
          Coins
        </Typography>
        <IconButton aria-label="refresh price feed" sx={{ p: 0, px: 0.5 }}>
          <RefreshRoundedIcon
            sx={{ color: theme.palette.text.default, opacity: 0.3 }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", lg: "column" },
          justifyContent: "space-between",
        }}
      >
        {examplePriceFeedData.map((item, id) => (
          <RowItem
            key={id}
            coin={item.coin}
            ticker={item.ticker}
            change={item.change}
            percent={item.percent}
            price={item.price}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PriceFeed;
