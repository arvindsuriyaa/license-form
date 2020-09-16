import React from "react";
import { personalStyle } from "../../../../styles/FormStyles";
import { Paper, Grid } from "@material-ui/core";
import InputField from "../../../common/InputField";

const Professional = () => {
  const classes = personalStyle();
  return (
    <div className={classes.userRoot} style={{ width: "100%" }}>
      <Paper elevation={2} style={{ width: "100%" }}>
        <div className={classes.grid}>
          <Grid container spacing={3}>
            <InputField label="Salary per Annum" sm={6} />
            <InputField label="Level" sm={6} />
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Professional;
