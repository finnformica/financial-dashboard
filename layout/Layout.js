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
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{ pt: 4, pb: 2.5, px: 3 }}
        >
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
