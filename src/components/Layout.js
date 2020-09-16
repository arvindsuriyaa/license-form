import React, { Component } from "react";
import NavBar from "./common/NavBar";
import { withRouter } from "react-router-dom";

const Layout = (props) => {
  // render() {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
  // }
};

export default withRouter(Layout);
