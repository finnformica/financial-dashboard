import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "../layout/Layout";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E24680",
    },
    background: {
      main: "#151517",
      light: "#181920",
      border: "#444",
    },
  },
});

function MyApp({ Component, pageProps }) {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
