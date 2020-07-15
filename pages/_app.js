import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "../theme/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
