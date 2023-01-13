import { Box, Typography } from "@mui/material";
import { exampleBannerData } from "./exampleBannerData";

const bannerItems = [
  { heading: "Coin", slug: "coin" },
  { heading: "Price", slug: "price" },
  { heading: "Change", slug: "change" },
  { heading: "24h Volume", slug: "volume" },
  { heading: "24h High", slug: "high" },
  { heading: "24h Low", slug: "low" },
];

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
          <Typography variant="subtitle1" color="grey.500" fontSize={12}>
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
