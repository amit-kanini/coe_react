import React, {useState} from "react";
import COE from "../assets/images/Coe-logo.png";
import AccImg from "../assets/images/BuiltIn.png";
import Report from "../assets/images/DataLineChart.png";
import Dboard from "../assets/images/Dashboard.png";
import { useHistory } from "react-router-dom";

function Sidebar() {

  const history = useHistory();

  const [ActiveClr, setActiveClr] = useState(false);

  const Dashboard = () => {
    history.push('/Dashboard')
    setActiveClr(true)
  }

  const Acc = () => {
    history.push('/Accelerator')
  }

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
        <li className="nav-item" style={{cursor: 'pointer'}}>
          <p
            className="nav-link dis-start active side-nav"
            aria-current="page"
            data-bs-toggle="tab"
            onClick={Dashboard}
          >
            <img
              className="bi ms-2 me-2"
              src={Dboard}
              width="16"
              height="16"
            ></img>
            Dashboard
          </p>
        </li>
        <li style={{cursor: 'pointer'}}>
          <p className="nav-link dis-start side-nav text-white" data-bs-toggle="tab"  onClick={Acc}>
            <img
              className="bi ms-2 me-2"
              src={AccImg}
              width="16"
              height="16"
            ></img>
            Accelerators
          </p>
        </li>
        <li style={{cursor: 'pointer'}}>
          <p className="nav-link dis-start side-nav text-white" data-bs-toggle="tab" >
            <img
              className="bi ms-2 me-2"
              src={Report}
              width="16"
              height="16"
            ></img>
            Reports
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
