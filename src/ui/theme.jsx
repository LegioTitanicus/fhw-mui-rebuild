import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#42a5f4",
    },
  },
});

export default theme;
