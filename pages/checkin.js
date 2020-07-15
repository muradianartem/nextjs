import { Formik } from "formik";
import getTime from "date-fns/getTime";
import formatISO from "date-fns/formatISO";
import * as Yup from "yup";
import subHours from "date-fns/subHours";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { withRedux } from "../withRedux";

import styles from "../style/checkin.style";

const SignupSchema = Yup.object().shape({
  checkin: Yup.date()
    .min(
      subHours(new Date(), -2),
      `Checkin date cannot be earlier then 2 hours ahead`
    )
    .required(),
  checkout: Yup.date()
    .min(
      subHours(new Date(), -6),
      `checkout date cannot be earlier then 4 hours after checkin`
    )
    .when(
      "checkin",
      (checkin, schema) =>
        checkin &&
        schema.min(
          checkin,
          `checkout date cannot be earlier then 4 hours after checkin`
        )
    )
    .required(),
});

const getDateISO = () => {
  const date = new Date();
  const dateISO = formatISO(getTime(date), { representation: "date" });

  return `${dateISO}T00:00`;
};

const Checkin = () => {
  const dispatch = useDispatch();
  const classes = styles();

  return (
    <>
      <h1>Choose check-in and check-out dates</h1>
      <Formik
        initialValues={{ checkin: "", checkout: "" }}
        validationSchema={SignupSchema}
        onSubmit={({ checkin, checkout }) => {
          dispatch({ type: "CHECKOUT", checkout });
          dispatch({ type: "CHECKIN", checkin });
          Router.push("/location", "/location", { shallow: true });
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div style={classes.root}>
              <div style={classes.dateWrapper}>
                <label style={classes.dateLabel}>Check-in</label>
                <input
                  id="checkin"
                  type="datetime-local"
                  min={getDateISO()}
                  onChange={handleChange}
                  value={values.checkin}
                  style={classes.date}
                />
                {errors.checkin && touched.checkin && (
                  <div>{errors.checkin}</div>
                )}
              </div>
              <div style={classes.dateWrapper}>
                <label style={classes.dateLabel}>Check-out</label>
                <input
                  id="checkout"
                  type="datetime-local"
                  min={getDateISO()}
                  onChange={handleChange}
                  value={values.checkout}
                  style={classes.date}
                />
                {errors.checkout && touched.checkout && (
                  <div>{errors.checkout}</div>
                )}
              </div>
              <div style={classes.submitButton}>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default withStyles(styles)(withRedux(Checkin));
