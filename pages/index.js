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
        {gridAreas.map((name) => (
          <GridItem gridArea={name}></GridItem>
        ))}
      </GridContainer>
    </>
  );
}
