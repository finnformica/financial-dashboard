import { useState, useEffect } from "react";

import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";

const UtilityIcons = ({ setMode, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const state = localStorage.getItem("mode");
    setMode(state ? state : "dark");
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeToggle = () => {
    localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <Box>
      <IconButton aria-label="dark mode toggle" onClick={handleModeToggle}>
        {mode === "dark" ? (
          <DarkModeOutlinedIcon sx={{ color: theme.palette.text.default }} />
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
  );
};

export default UtilityIcons;
