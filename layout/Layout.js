import { Container, useTheme } from "@mui/material";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <div style={{ minWidth: "720px" }}>
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
    </div>
  );
};

export default Layout;
