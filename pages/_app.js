import { useState, useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Layout from "../layout/Layout";
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
        <CssBaseline />
        <Layout setMode={setMode} mode={mode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
