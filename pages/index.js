import { useTheme } from "@mui/material";
import GridContainer from "../components/DashboardGrid/GridContainer";
import GridItem from "../components/DashboardGrid/GridItem";
import Banner from "../components/Banner/Banner";

export default function Home() {
  // const theme = useTheme();
  const gridAreas = [
    { name: "banner", element: <Banner /> },
    { name: "chart", element: <div></div> },
    { name: "buy", element: <div></div> },
    { name: "sell", element: <div></div> },
    { name: "prices", element: <div></div> },
    { name: "summary", element: <div></div> },
    { name: "history", element: <div></div> },
  ];
  return (
    <>
      <GridContainer>
        {gridAreas.map((gridItem, id) => (
          <GridItem gridArea={gridItem.name} key={id}>
            {gridItem.element}
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
