import React from "react";
import { personalStyle } from "../../../styles/FormStyles";
import {
  Paper,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import InputField from "../../common/InputField";
import CheckBoxField from "../../common/CheckBoxField";

let list = ["Permanent Address Same as communication address"];

const AddressDetails = () => {
  const classes = personalStyle();
  return (
    <div className={classes.userRoot}>
      <Paper style={{ width: "100%" }} elevation={3}>
        <div className={classes.grid}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Typography style={{ fontSize: "18px" }}>
                Communication Address
              </Typography>
            </Grid>
            <InputField label="Address" sm={12} />
            <InputField label="Country" sm={6} />
            <InputField label="State" sm={6} />
            <InputField label="District" sm={6} />
            <InputField label="Pincode" sm={6} />
            <Grid item sm={12}>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={gilad}
                      // onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label="Permanent Address same as Communication address"
                />
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default AddressDetails;
