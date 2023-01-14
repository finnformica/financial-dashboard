const tooltip = (theme) => ({
  textStyle: { fontName: theme.typography.fontFamily },
  showColorCode: true,
});

const extractMonths = (data) => {
  var currentMonth = -1;
  var ticks = [];

  for (var i = 0; i < data.length; i++) {
    var testDate = data[i][0];

    if (i <= 0) continue;

    if (testDate.getMonth() > currentMonth) {
      currentMonth = testDate.getMonth();
      ticks.push(new Date(testDate.getFullYear(), testDate.getMonth(), 1));
    }
  }
  return ticks;
};

const hAxis = (theme, data) => ({
  gridlines: { color: "transparent", count: 0 },
  format: "M",
  ticks: extractMonths(data),
  textStyle: {
    color: theme.palette.grey[500],
    fontName: theme.typography.fontFamily,
  },
});

const vAxis = (theme) => ({
  gridlines: { color: "transparent", count: 0 },
  textStyle: {
    color: theme.palette.grey[500],
    fontName: theme.typography.fontFamily,
  },
});

const candlestick = {
  fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
  risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  hollowIsRising: true,
};

export const chartOptions = (theme, data) => ({
  legend: "none",
  animation: {
    duration: 0.3,
    easing: "in",
    startup: true,
  },
  bar: { groupWidth: "100%" },
  candlestick,
  tooltip: tooltip(theme),
  colors: [theme.palette.text.default],
  backgroundColor: theme.palette.background.light,
  hAxis: hAxis(theme, data),
  vAxis: vAxis(theme),
  theme: { chartArea: { width: "90%", height: "90%" } },
});
