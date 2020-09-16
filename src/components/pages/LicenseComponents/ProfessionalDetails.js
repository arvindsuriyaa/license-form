import React, { useState, useEffect } from "react";
import { Paper, RadioGroup } from "@material-ui/core";
import { professionStyle } from "../../../styles/FormStyles";
import RadioButton from "../../common/RadioButton";
import Student from "./professionalComponents/Student";
import Professional from "./professionalComponents/Professional";
import HouseWives from "./professionalComponents/HouseWives";

let list = [
  { id: 1, name: "Student" },
  { id: 2, name: "Professional" },
  { id: 3, name: "HouseWives" },
];

const ProfessionalDetails = () => {
  const [component, setComponent] = useState();
  const [value, setValue] = useState(1);
  const classes = professionStyle();

  let profession = [
    {
      id: 1,
      component: <Student />,
    },
    {
      id: 2,
      component: <Professional />,
    },
    {
      id: 3,
      component: <HouseWives />,
    },
  ];

  const assignComponent =  (value) => {
    // console.log("value at mount: ", value);
    if (!value) {
      value = 1;
    }
    setValue(value);
    // if (value === 1) {
    //   setComponent(<Student />);
    // } else if (value === 2) {
    //   setComponent(<Professional />);
    // } else if (value === 3) {
    //   setComponent(<HouseWives />);
    // }
  };
  useEffect(assignComponent, []);
  return (
    <>
      <div className={classes.root} elevation={4}>
        <Paper className={classes.radioRoute}>
          <RadioGroup row className={classes.alignRadio}>
            {list &&
              list.map((role, index) => {
                return (
                  <RadioButton
                    key={index}
                    value={role.id}
                    checked={value === role.id}
                    onChange={(event) =>
                      assignComponent(Number(event.target.value))
                    }
                    itemName={role.name}
                  />
                );
              })}
          </RadioGroup>
        </Paper>
        {/* {component} */}
        {profession[value - 1].component}
      </div>
    </>
  );
};

export default ProfessionalDetails;
