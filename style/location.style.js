import { createStyles } from "@material-ui/core";

export default () =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      margin: 48,
      maxWidth: 400,
    },
    label: {
      marginRight: 16,
    },
  });
