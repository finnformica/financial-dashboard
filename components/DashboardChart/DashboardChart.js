import { Box, useTheme } from "@mui/material";
import { Chart } from "react-google-charts";
import { exampleChartData } from "./exampleChartData";
import { chartOptions } from "./chartOptions";

const DashboardChart = () => {
  const theme = useTheme();
  const data = exampleChartData
    .slice(10, 90)
    .map((item) => [
      new Date(item.Date),
      +item["AAPL.Low"],
      +item["AAPL.Open"],
      +item["AAPL.Close"],
      +item["AAPL.High"],
      item.direction === "Increasing"
        ? theme.palette.candlestick.green
        : theme.palette.candlestick.red,
    ]);

  data.unshift([
    "x",
    "low",
    "open",
    "close",
    "hight",
    { role: "style", type: "string" },
  ]);

  return (
    <Box>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="450px"
        data={data}
        options={chartOptions(theme, data)}
      />
    </Box>
  );
};

export default DashboardChart;
