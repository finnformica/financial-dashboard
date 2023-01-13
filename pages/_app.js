import { useState, useMemo } from "react";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../layout/Layout";
import "../styles/globals.css";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#E24680",
//     },
//     success: {
//       main: "#0BA57E",
//     },
//     warning: {
//       main: "#AF3957",
//     },
//     background: {
//       main: "#151517",
//       light: "#181920",
//       border: "#444",
//     },
//     text: {
//       default: "#fff",
//     },
//   },
// });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          // palette values for dark mode
          primary: {
            main: "#E24680",
          },
          background: {
            main: "#151517",
            light: "#181920",
            border: "#444",
          },
          text: {
            default: "#FFF",
          },
        }
      : {
          // palette values for light mode
          primary: {
            main: "#E24680",
          },
          background: {
            main: "#F6F7FB",
            light: "#FFF",
            border: "#FFF",
          },
          text: {
            default: "#000",
          },
        }),
  },
});

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("dark");

  // update theme if mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <Head>
        <title>Cryptoslash</title>
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Financial dashboard front-end built using Next.js and MUI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout setMode={setMode} mode={mode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
