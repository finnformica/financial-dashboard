import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Header />

      {/* push content below navbar */}
      <div style={{ height: theme.mixins.toolbar.minHeight }}></div>
      <main>
        <Container maxWidth={false} sx={{ py: 2 }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
