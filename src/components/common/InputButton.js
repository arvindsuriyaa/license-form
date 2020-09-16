import React from "react";
import { Button } from "@material-ui/core";

const InputButton = (props) => {
  return (
    <Button className={props.className} onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default InputButton;
