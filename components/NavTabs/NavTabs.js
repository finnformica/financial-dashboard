import { useState, useEffect } from "react";
import Link from "next/link";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

function LinkTab({ href, value, label, onChange }) {
  const theme = useTheme();
  return (
    <Tab
      onClick={(event) => {
        event.preventDefault();
      }}
      disableRipple={true}
      value={value}
      onChange={onChange}
      style={{ textTransform: "none" }}
      label={
        <Link
          href={href}
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
        >
          <Typography>{label}</Typography>
        </Link>
      }
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  // prevents hydration error
  if (!hasMounted) return null;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab label="Dashboard" href="/" />
        <LinkTab label="Payment" href="/payment" />
        <LinkTab label="Trade" href="/trade" />
      </Tabs>
    </Box>
  );
}
