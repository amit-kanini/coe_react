import React from "react";
import "./signup.css";
import SignupImg from "../assets/images/signup.png";

function Signup() {
  return (
    <div className="container-fluid m-0">
      <div className="row layout display-props m-0">
        <div className="col-6">
          <img src={SignupImg}></img>
        </div>
        <div className="col-6">
          <p>Form</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
