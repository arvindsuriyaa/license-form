import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class LicenseList extends Component {
  render() {
    return (
      <div>
        This is Table
        <Link to="/AddLicense/PersonalDetails">Form</Link>
         {/* <a href="/AddLicense">Form</a> */}
      </div>
    );
  }
}

export default withRouter(LicenseList);
