// palette values for dark mode
const darkTheme = {
  primary: {
    main: "#E24680",
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
  background: {
    main: "#F6F7FB",
    light: "#FFF",
    border: "#FFF",
  },
  success: {
    main: "#0BBF91",
  },
  warning: {
    main: "#F27593",
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
});
