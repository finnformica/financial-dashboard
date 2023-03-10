import GridContainer from "../components/DashboardGrid/GridContainer";
import GridItem from "../components/DashboardGrid/GridItem";
import Banner from "../components/Banner/Banner";
import BuySell from "../components/BuySell/BuySell";
import PriceFeed from "../components/PriceFeed/PriceFeed";
import Summary from "../components/Summary/Summary";
import History from "../components/History/History";
import DashboardChart from "../components/DashboardChart/DashboardChart";

export default function Home() {
  const gridAreas = [
    { name: "banner", element: <Banner /> },
    { name: "chart", element: <DashboardChart /> },
    { name: "buy", element: <BuySell mode="buy" /> },
    { name: "sell", element: <BuySell mode="sell" /> },
    { name: "prices", element: <PriceFeed /> },
    { name: "summary", element: <Summary /> },
    { name: "history", element: <History /> },
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
