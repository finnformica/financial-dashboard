import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

function LinkTab({ value, label, onChange }) {
  const theme = useTheme();
  return (
    <Tab
      value={value}
      onChange={onChange}
      disableRipple={true}
      sx={{ textTransform: "none", mt: "12px" }}
      label={
        <Typography color={theme.palette.text.default}>{label}</Typography>
      }
    />
  );
}

export default function NavTabs() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const routes = ["/", "/payment", "/trade"];

  // link state of tabs to url
  useEffect(() => {
    const tabVal = Array.prototype.indexOf.call(routes, router.route);
    setValue(tabVal);
  }, [router.route]);

  // prevent hydration error
  useEffect(() => setHasMounted(true));
  if (!hasMounted) return null;

  const handleChange = (event, newValue) => {
    // update route to reflect page change
    router.push(routes[newValue]);
    setValue(newValue);

    localStorage.setItem("route", newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        pl: "5%",
      }}
    >
      <Tabs
        sx={{ height: "73px" }}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
      >
        <LinkTab label="Dashboard" />
        <LinkTab label="Payment" />
        <LinkTab label="Trade" />
      </Tabs>
    </Box>
  );
}
