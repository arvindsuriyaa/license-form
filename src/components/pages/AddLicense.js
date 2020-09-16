import React, { Component, useState } from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import { formStyles } from "../../styles/FormStyles";
import {
  Button,
  Container,
  Box,
  BottomNavigation,
  Paper,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StepperBox from "../common/StepperBox";
import { navigationList, routePath } from "../../constants/constants";
import Footer from "../common/Footer";
import PersonalDetails from "./LicenseComponents/PersonalDetails";
import AddressDetails from "./LicenseComponents/AddressDetails";
import ProfessionalDetails from "./LicenseComponents/ProfessionalDetails";

const path = [
  "/AddLicense/PersonalDetails",
  "/AddLicense/AddressDetails",
  "/AddLicense/ProfessionalDetails",
];

const AddLicense = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = formStyles();

  const handleStep = (step) => {
    setActiveStep(step);
    props.history.push(path[step]);
  };

  const formComponents = {
    PersonalDetails: {
      id: 1,
      component: <PersonalDetails />,
    },
    AddressDetails: {
      id: 2,
      component: <AddressDetails />,
    },
    ProfessionalDetails: {
      id: 3,
      component: <ProfessionalDetails />,
    },
  };

  //   render() {
  return (
    //   <div>
    //     Add License
    //     <Link to="/">Table</Link>
    //     <div style={{ display: "flex", justifyContent: "space-around" }}>
    //       <div>
    //         <span>stepper</span>
    //         <div>
    //           <Link to="/AddLicense/PersonalDetails">PersonalDetails</Link>
    //         </div>
    //         <div>
    //           <Link to="/AddLicense/AddressDetails">AddressDetails</Link>
    //         </div>
    //         <Link to="/AddLicense/ProfessionalDetails">ProfessionalDetails</Link>
    //       </div>
    //       <div>{props.children}</div>
    //     </div>
    //   </div>
    <div id="wrapper">
      <Container
        className={classes.container}
        //   style={{padding:"30px"}}
        // maxWidth="md"
      >
        <header style={{ padding: "15px 12px" }}>
          <Button
            className={classes.button}
            // onClick={
            //   !activeStep
            //     ? () => {
            //         cancel();
            //         history.push(Root.TABLE);
            //       }
            //     : () => handleBack(activeStep)
            // }
          >
            <ArrowBackIcon />
            Individual List
          </Button>
        </header>
        <Box className={classes.root}>
          <Paper elevation={3} style={{ height: "0%" }}>
            <StepperBox
              className={classes.stepper}
              activeStep={activeStep}
              navigationList={navigationList}
              // completed={isCompleted}
              handleStep={handleStep}
              // errors={errors}
            />
          </Paper>
          {/* {props.children} */}
          {formComponents[props.match.params.name].component}
        </Box>
        <BottomNavigation className={classes.footerAlign}>
          <Footer
            // isEdit={reducer.isEdit}
            // activeStep={activeStep}
            // cancel={cancel}
            // handleBack={handleBack}
            routePath={routePath}
            // handleNext={handleNext}
            // save={save}
          />
        </BottomNavigation>
      </Container>
    </div>
  );
  //   }
};

export default AddLicense;
