import { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../layout/Layout";
import "../styles/globals.css";
import { getDesignTokens } from "../theme/theme";
import MetaTags from "../components/MetaTags/MetaTags";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("dark");

  // update theme if mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <MetaTags />
      <ThemeProvider theme={theme}>
        <Layout setMode={setMode} mode={mode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
