import { Box, useTheme } from "@mui/material";
import GridContainer from "../components/DashboardGrid/GridContainer";
import GridItem from "../components/DashboardGrid/GridItem";

export default function Home() {
  const theme = useTheme();
  const gridAreas = [
    "banner",
    "chart",
    "buy",
    "sell",
    "prices",
    "summary",
    "history",
  ];
  return (
    <>
      <GridContainer>
        {/* <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "banner",
            bgcolor: "primary.main",
          }}
        >
          Banner
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "chart",
            bgcolor: "secondary.main",
          }}
        >
          Chart
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "buy",
            bgcolor: "success.main",
          }}
        >
          Buy
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "sell",
            bgcolor: "error.main",
          }}
        >
          Sell
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "prices",
            bgcolor: "warning.dark",
          }}
        >
          Prices
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "summary",
            bgcolor: "info.dark",
          }}
        >
          Summary
        </Box>
        <Box
          sx={{
            p: 1,
            borderRadius: 2,
            gridArea: "history",
            bgcolor: "info.main",
          }}
        >
          History
        </Box> */}
        {gridAreas.map((name) => (
          <GridItem gridArea={name}>{name}</GridItem>
        ))}
      </GridContainer>
    </>
  );
}
