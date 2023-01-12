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
import Link from "next/link";
import NavTabs from "../NavTabs/NavTabs";

// make labels white
// push indicator down to border
// link toggle behaviour to url
// store state in localStorage
// add padding between tabs

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <IconButton aria-label="rocket ship logo" color="inherit">
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
            >
              <RocketRoundedIcon />
            </Link>
          </IconButton>
          <Typography variant="h6">Cryptoslash</Typography>
          <Box
            sx={{
              flexGrow: 1,
              pl: "5%",
            }}
          >
            <NavTabs />
          </Box>
          <Box>
            <IconButton aria-label="settings of current user" color="inherit">
              <SettingsIcon />
            </IconButton>

            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
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
