import React from "react";
import { personalStyle } from "../../../../styles/FormStyles";
import { Paper } from "@material-ui/core";

const HouseWives = () => {
  const classes = personalStyle();
  return (
    <div className={classes.userRoot} style={{ width: "100%" }}>
      <Paper elevation={2} style={{ width: "100%" }}>
        <div
          className={classes.grid}
          style={{
            display: "flex",
            height: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Form available
        </div>
      </Paper>
    </div>
  );
};

export default HouseWives;
