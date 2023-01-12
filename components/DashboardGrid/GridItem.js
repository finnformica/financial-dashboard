import { Box } from "@mui/material";

const GridItem = ({ gridArea, children }) => {
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        gridArea: gridArea,
        bgcolor: "primary.main",
      }}
    >
      {children}
    </Box>
  );
};

export default GridItem;
