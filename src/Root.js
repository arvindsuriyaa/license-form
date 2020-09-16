import React from "react";
import NavBar from "./components/common/NavBar";
import LicenseList from "./components/pages/LicenseList";
import AddLicense from "./components/pages/AddLicense";
import PersonalDetails from "./components/pages/LicenseComponents/PersonalDetails";
import ProfessionalDetails from "./components/pages/LicenseComponents/ProfessionalDetails";
import AddressDetails from "./components/pages/LicenseComponents/AddressDetails";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./components/Layout";
import FormIndex from "./components/FormIndex";
const Root = () => {
  return (
    <>
      <NavBar />
      <Router>
        {/* <Layout>        */}
        <Route exact path="/" component={LicenseList} />
        <Route exact path="/AddLicense/:name" component={FormIndex} />
        {/* <Route path="/AddLicense">
            <AddLicense>
              <Route exact path="/AddLicense/AddressDetails" component={AddressDetails} />
              <Route exact path="/AddLicense/PersonalDetails" component={PersonalDetails} />
              <Route exact path="/AddLicense/ProfessionalDetails" component={ProfessionalDetails} />
              <Redirect to="/AddLicense/PersonalDetails" />
            </AddLicense>
          </Route> */}
        {/* </Layout> */}
        {/* <Redirect to="/" /> */}
      </Router>
    </>
  );
};

export default Root;
