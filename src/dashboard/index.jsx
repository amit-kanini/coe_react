import React from "react";
import "./style.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import Accelerator from "../Accelerator";
import { Switch, Route } from "react-router-dom";
import AccLayout from "../Accelerator/layout";

function Layout() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0" style={{ width: "100%", height: "100vh" }}>
        <div className="col-2 sidebar p-0 d-flex" style={{ height: "100%" }}>
          <Sidebar />
        </div>
        <div
          className="col-10 p-0"
          style={{ height: "100vh", background: "#F6F6F6" }}
        >
          <div style={{height: "10vh"}}>
          <Navbar />
          </div>
          {/* <Dashboard /> */}
          <div style={{ height: "90vh"}}>
            <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Accelerator" component={Accelerator} />
              <Route exact path="/Accelerator/LoanAccelerator" component={AccLayout} />
            </Switch>
          </div>
          {/* <Accelerator /> */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
