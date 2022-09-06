import React from "react";
import './style.css';
import Notify from "../assets/images/noti.png";
import avatar from "../assets/images/sample.png";

function Navbar() {
  return (
      <nav className="navbar" style={{backgroundColor: '#fff'}}>
        <div className="container-fluid dis-last p-0">
          <a className="navbar-brand" href="#">
            <img src={Notify} alt="" width="25" height="24" />
          </a>
          <a className="navbar-brand" href="#">
            <img src={avatar} alt="" width="25" height="24" />
          </a>
        </div>
      </nav>
  );
}

export default Navbar;
