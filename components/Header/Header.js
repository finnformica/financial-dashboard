import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";
import Link from "next/link";

import NavTabs from "./NavTabs";
import UtilityIcons from "./UtilityIcons";

const Header = ({ setMode, mode }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.light,
          borderBottom: 1.5,
          borderColor: theme.palette.background.border,
          minWidth: "680px",
          transition: "all 0.3s ease-in-out",
        }}
        elevation={mode === "dark" ? 0 : 4}
      >
        <Toolbar sx={{ height: 70 }}>
          <IconButton aria-label="rocket ship logo" sx={{ mt: 0.5 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <RocketRoundedIcon sx={{ color: theme.palette.primary.main }} />
            </Link>
          </IconButton>
          <Typography color={theme.palette.text.default} variant="h5">
            Cryptoslash
          </Typography>

          <NavTabs />
          <UtilityIcons setMode={setMode} mode={mode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
