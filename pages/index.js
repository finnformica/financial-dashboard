import GridContainer from "../components/DashboardGrid/GridContainer";
import GridItem from "../components/DashboardGrid/GridItem";
import Banner from "../components/Banner/Banner";
import BuySell from "../components/BuySell/BuySell";

export default function Home() {
  const gridAreas = [
    { name: "banner", element: <Banner /> },
    { name: "chart", element: <div></div> },
    { name: "buy", element: <BuySell mode="buy" /> },
    { name: "sell", element: <BuySell mode="sell" /> },
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
