import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { borderColor } from "@mui/system";

const GridItem = ({ gridArea, children, id }) => {
  const theme = useTheme();
  return (
    <Box
      key={id}
      sx={{
        p: 1,
        borderRadius: theme.shape.borderRadius,
        gridArea: gridArea,
        backgroundColor: theme.palette.background.light,
        border: `1.5px ${theme.palette.background.border} solid`,
      }}
    >
      {children}
    </Box>
  );
};

export default GridItem;
