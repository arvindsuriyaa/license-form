import React from "react";
import { FormControlLabel, Checkbox, Grid } from "@material-ui/core";

const CheckBoxField = (props) => {
  const { list } = props;
  return (
    list &&
    list.map((data,index) => (
      <Grid item xs={4} lg={index===0?3:2}>
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label={data}
        />
      </Grid>
    ))
  );
};

export default CheckBoxField;
