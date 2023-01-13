import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import RocketRoundedIcon from "@mui/icons-material/RocketRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Link from "next/link";
import NavTabs from "../NavTabs/NavTabs";

// make labels white
// push indicator down to border
// link toggle behaviour to url
// store state in localStorage
// add padding between tabs

const Header = ({ setMode, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: theme.palette.background.light,
          borderBottom: 1.5,
          borderColor: theme.palette.background.border,
          minWidth: "640px",
        }}
        elevation={0}
      >
        <Toolbar sx={{ height: 70 }}>
          <IconButton aria-label="rocket ship logo">
            <Link href="/" style={{ textDecoration: "none" }}>
              <RocketRoundedIcon
                sx={{ color: theme.palette.primary.main, mt: 0.5 }}
              />
            </Link>
          </IconButton>
          <Typography color={theme.palette.text.default} variant="h5">
            Cryptoslash
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              pl: "5%",
            }}
          >
            <NavTabs />
          </Box>
          <Box>
            <IconButton
              aria-label="dark mode toggle"
              onClick={handleModeToggle}
            >
              {mode === "dark" ? (
                <DarkModeOutlinedIcon
                  sx={{ color: theme.palette.text.default }}
                />
              ) : (
                <DarkModeIcon sx={{ color: theme.palette.text.default }} />
              )}
            </IconButton>
            <IconButton aria-label="settings of current user">
              <SettingsIcon sx={{ color: theme.palette.text.default }} />
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircle sx={{ color: theme.palette.text.default }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
