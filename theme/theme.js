// palette values for dark mode
const darkTheme = {
  primary: {
    main: "#E24680",
  },
  secondary: {
    main: "#0586C6",
  },
  background: {
    main: "#151517",
    light: "#181920",
    border: "#444",
  },
  success: {
    main: "#03D7A0",
  },
  warning: {
    main: "#F04770",
  },
  text: {
    default: "#FFF",
  },
  candlestick: {
    green: "#03D7A0",
    red: "#F04770",
  },
};

// palette values for light mode
const lightTheme = {
  primary: {
    main: "#E24680",
  },
  secondary: {
    main: "#0586C6",
  },
  background: {
    main: "#F6F7FB",
    light: "#FFF",
    border: "#FFF",
  },
  success: {
    main: "#08D69F",
  },
  warning: {
    main: "#F04770",
  },
  text: {
    default: "#000",
  },
  candlestick: {
    green: "#03D7A0",
    red: "#F04770",
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? darkTheme : lightTheme),
  },
  typography: {
    fontFamily: "Rubik, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "&::selection": {
          background: "magenta",
        },
        body: {
          backgroundColor: mode === "dark" ? "#151517" : "#F6F7FB",
          transition: "all 0.3s ease-in-out",
          "&::selection": {
            background: "magenta",
          },
        },
        div: {
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
});
