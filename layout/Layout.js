import { useTheme } from "@emotion/react";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <main>
        {/* push content below navbar */}
        <div style={{ height: theme.mixins.toolbar.minHeight }}></div>
        {children}
      </main>
    </>
  );
};

export default Layout;
