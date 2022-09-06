import React from "react";
import COE from "../assets/images/Coe-logo.png";
import Acc from "../assets/images/BuiltIn.png";
import Report from "../assets/images/DataLineChart.png";
import Dboard from "../assets/images/Dashboard.png";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 text-white"
      style={{ width: "100%" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img className="coe-img px-3 p-2" src={COE}></img>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link dis-start active side-nav"
            aria-current="page"
          >
            <img
              className="bi ms-2 me-2"
              src={Dboard}
              width="16"
              height="16"
            ></img>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link dis-start side-nav text-white">
            <img
              className="bi ms-2 me-2"
              src={Acc}
              width="16"
              height="16"
            ></img>
            Accelerators
          </a>
        </li>
        <li>
          <a href="#" className="nav-link dis-start side-nav text-white">
            <img
              className="bi ms-2 me-2"
              src={Report}
              width="16"
              height="16"
            ></img>
            Reports
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
