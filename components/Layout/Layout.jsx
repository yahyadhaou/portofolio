import React, { Fragment } from "react";
import Header from "../Header/Header";
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
