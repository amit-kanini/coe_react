import React from "react";
import "./style.css";
import LoanAcc from "../assets/images/LoanAccelerator.png";
import ML360 from "../assets/images/ML360.png";
import ModelOps from "../assets/images/ModelOps.png";
import DocIntelligence from "../assets/images/DocIntelligence.png";
import CustomerIntelligence from "../assets/images/CustomerIntelligence.png";
import HealthCare from "../assets/images/HealthCare.png";
import Common from "../assets/images/Common.png";
import ABCHealth from "../assets/images/ABCHealth.png";
import RAS from "../assets/images/RAS.png";
import { useHistory } from "react-router-dom";
import AnimeCard from "./anime-card";

function Accelerator() {
  const history = useHistory();

  const handleCard = () => {
    history.push("/Accelerator/LoanAccelerator")
  };

  return (
    <div className="inner-layout">
      <p className="path px-3 py-3 mb-0 text-start">COE | Manage Accelerator</p>
      <div className="container-fluid p-0">
        <div className="row p-2 m-0" style={{ width: "100%" }}>

          <AnimeCard />
          {/* CARD 1

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0" onClick={handleCard}>
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={LoanAcc}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Loan Accelerator
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 2

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={ML360}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    ML360
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 3

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={ModelOps}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Modal Ops
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 4

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={DocIntelligence}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Doc Intelligence
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 5

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={CustomerIntelligence}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Customer Intelligence
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 6

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={HealthCare}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Recommendation Healthcare
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-1 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          CARD 7

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={Common}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Common Data Modals
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          //CARD 8

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={ABCHealth}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    ABC Healthcare
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          //CARD 9

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={RAS}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    RAS
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          //card 10 

          <div className="col-4 p-2 mb-2">
            <div className="card p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
                <div className="col-4 p-0">
                  <img className="acc-img" src={ModelOps}></img>
                </div>
                <div className="col-8 px-2">
                  <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#12355B",
                    }}
                  >
                    Dashboard Mela
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400" }}
                  >
                    Last Updated 03 Mar 2022
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "11px", fontWeight: "400" }}
                  >
                    Hey, take a look at the earthlings. Goodbye! There is no one
                    who loves.
                  </p>
                  <p
                    className="text-start"
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#1076BD",
                    }}
                  >
                    <span style={{ borderBottom: "1px solid #1076BD" }}>
                      View Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Accelerator;
