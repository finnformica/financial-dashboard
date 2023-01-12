import { Box, Typography } from "@mui/material";

// const bannerItems = [
//   "Coin",
//   "Price",
//   "Change",
//   "24h Volume",
//   "24h High",
//   "24h Low",
// ];

const bannerItems = [
  { heading: "Coin", slug: "coin" },
  { heading: "Price", slug: "price" },
  { heading: "Change", slug: "change" },
  { heading: "24h Volume", slug: "volume" },
  { heading: "24h High", slug: "high" },
  { heading: "24h Low", slug: "low" },
];

const exampleBannerData = {
  coin: "BTC",
  price: "$18,846.88",
  change: "+7.4%",
  volume: "$50,026,356,915",
  high: "$18,989.18",
  low: "$17,529.74",
};

const BannerItem = (props) => {
  <Box>
    <Typography variant="subtitle" color="grey.400">
      {props.heading}
    </Typography>
  </Box>;
};

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 2,
        alignItems: "center",
      }}
    >
      {bannerItems.map((item, id) => (
        <Box key={id}>
          <Typography variant="subtitle1" color="grey.400" fontSize={12}>
            {item.heading}
          </Typography>
          <Typography
            color={item.slug !== "change" ? "text.default" : "success.main"}
            fontSize={14}
          >
            {exampleBannerData[item.slug]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Banner;
