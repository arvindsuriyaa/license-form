import React from "react";
import { CustomAutocomplete, personalStyle } from "../../../styles/FormStyles";
import {
  Grid,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Checkbox,
} from "@material-ui/core";
import InputField from "../../common/InputField";
import CheckBoxField from "../../common/CheckBoxField";

let list = [
  "News Paper/Ads",
  "TV Media",
  "FaceBook",
  "Linkedin",
  "By Friend",
  "Others",
];

const PersonalDetails = () => {
  const classes = personalStyle();
  return (
    <div className={classes.userRoot}>
      <Paper style={{ width: "100%" }} elevation={3}>
        <div className={classes.grid}>
          <Grid container spacing={3}>
            <InputField label="User Name" sm={6} />
            <Grid item sm={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                <FormLabel component="legend">Gender</FormLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </div>
            </Grid>
            <InputField label="Date of Birth" sm={6} />
            <InputField label="Age" sm={6} />
            <InputField label="Mail Id" sm={6} />
            <InputField label="Mobile No" sm={6} />
            <InputField label="Mother Tongue" sm={6} />
            <InputField label="Preffered Language" sm={12} />
            <Grid item sm={12}>
              <Typography className={classes.Typography}>
                How you come to know about the product
              </Typography>
            </Grid>
            <CheckBoxField list={list} />
            <InputField label="Others" sm={12} />
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default PersonalDetails;
