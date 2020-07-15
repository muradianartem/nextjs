import { createStyles } from "@material-ui/core";

export default () =>
  createStyles({
    root: {
      display: "grid",
      margin: 16,
      maxWidth: 700,
    },
    dateWrapper: {
      margin: 16,
    },
    dateLabel: {
      width: 144,
      display: "inline-block",
    },
    date: {
      marginLeft: 12,
    },
    submitButton: {
      margin: 16,
      display: "flex",
    },
  });
