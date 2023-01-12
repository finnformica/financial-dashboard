import { styled } from "@mui/material/styles";

const GridContainer = styled("div")(({ theme }) => ({
  minWidth: "720px",
  [theme.breakpoints.up("xs")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1.5fr 10fr 4fr 4fr 4fr 6fr",
    gridTemplateAreas: `
            "banner banner"
            "chart chart"
            "buy sell"
            "prices prices"
            "summary summary"
            "history history"
            `,
    gap: theme.spacing(2.5),
    height: "150vh",
  },

  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr 3fr",
    gridTemplateRows: "1.5fr 10fr 4fr 7fr",
    gridTemplateAreas: `
        "prices banner banner"
        "prices chart chart"
        "prices buy sell"
        "summary history history"
        `,
    gap: theme.spacing(2.5),
    height: "120vh",
  },

  [theme.breakpoints.up("xl")]: {
    display: "grid",
    gridTemplateColumns: "2fr 7fr 2fr",
    gridTemplateRows: "1.5fr 4fr 6.2fr 6fr",
    gridTemplateAreas: `
    "prices banner buy"
    "prices chart buy"
    "prices chart sell"
    "summary history history"
    `,
    gap: theme.spacing(2.5),
    height: "88vh",
  },
}));

export default GridContainer;
