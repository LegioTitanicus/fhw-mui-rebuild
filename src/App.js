import React from "react";
import TabPanel from "@material-ui/lab/TabPanel";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Topnav from "./ui/Topnav";
import theme from "./ui/theme";

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Topnav />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
