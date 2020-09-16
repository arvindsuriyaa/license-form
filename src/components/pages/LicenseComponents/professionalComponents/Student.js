import React from "react";
import { personalStyle } from "../../../../styles/FormStyles";
import { Paper, Input, Grid } from "@material-ui/core";
import InputField from "../../../common/InputField";
const Student = () => {
  const classes = personalStyle();
  return (
    <div className={classes.userRoot} style={{ width: "100%" }}>
      <Paper elevation={2} style={{ width: "100%" }}>
        <div className={classes.grid}>
          <Grid container spacing={3}>
            <InputField label="Current Qualification" sm={12} />
            <InputField label="Institution Name" sm={6} />
            <InputField label="Studying At" sm={6} />
            <InputField label="Instituton Address" sm={12} />
            <InputField label="Country" sm={6} />
            <InputField label="State" sm={6} />
            <InputField label="District" sm={6} />
            <InputField label="Pincode" sm={6} />
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Student;
