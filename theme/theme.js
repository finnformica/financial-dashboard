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
    main: "#0BBF91",
  },
  warning: {
    main: "#AF3957",
  },
  text: {
    default: "#FFF",
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
        body: {
          backgroundColor: mode === "dark" ? "#151517" : "#F6F7FB",
        },
      },
    },
  },
});
