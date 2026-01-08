import React from "react";

import { Outlet } from "react-router-dom";
import Side from "../Nav/Side";
import NavBar from "../Nav/NavBar";
import Footer from "../Nav/Footer";

function Layout() {
  return (
    <div>
      {/* <Side /> */}
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
