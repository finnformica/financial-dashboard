import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab label="Page One" href="/" />
        <LinkTab label="Page Two" href="/payment" />
        <LinkTab label="Page Three" href="/trade" />
      </Tabs>
    </Box>
  );
}
