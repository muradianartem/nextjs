import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  primary: "#000",
  primaryAccent: "#D10C0C",
  error: "#AA1100",
};

const spacing = 4;

export const theme = createMuiTheme({
  spacing,
  pallete: {
    colors,
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.primaryAccent,
    },
    error: {
      main: colors.error,
    },
  },
  MuiInput: {
    underline: {
      "&:hover": {
        borderBottom: `1px solid ${colors.primaryAccent}`,
        cursor: "pointer",
      },
    },
  },
});
