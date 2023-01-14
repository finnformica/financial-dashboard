import { Box, useTheme } from "@mui/material";
import { Chart } from "react-google-charts";
import { exampleChartData } from "./exampleChartData";
// import getChartOptions from "./chartOptions";

const DashboardChart = () => {
  const theme = useTheme();
  const mapped = exampleChartData.map((item) => [
    item.Date,
    +item["AAPL.Low"],
    +item["AAPL.Open"],
    +item["AAPL.Close"],
    +item["AAPL.High"],
    item.direction === "Increasing"
      ? theme.palette.success.main
      : theme.palette.warning.main,
  ]);

  mapped.unshift([
    "x",
    "low",
    "open",
    "close",
    "hight",
    { role: "style", type: "string" },
  ]);

  const options = {
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars.
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
    },
    colors: [theme.palette.text.default],
    backgroundColor: theme.palette.background.light,
    hAxis: {
      gridlines: {
        color: theme.palette.text.default,
      },
      textStyle: {
        color: theme.palette.text.default,
        fontName: theme.typography.fontFamily,
      },
    },
    vAxis: {
      gridlines: {
        color: theme.palette.text.default,
        count: 0,
      },
      textStyle: {
        color: theme.palette.text.default,
        fontName: theme.typography.fontFamily,
      },
    },
    theme: {
      chartArea: { width: "90%", height: "90%" },
    },
    colors: ["magenta"],
  };

  return (
    <Box>
      <Chart
        chartType="CandlestickChart"
        width="100%"
        height="400px"
        data={mapped}
        options={options}
      />
    </Box>
  );
};

export default DashboardChart;
