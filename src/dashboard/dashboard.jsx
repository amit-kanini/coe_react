import React from "react";
import AUser from "../assets/images/AUser.png";
import NAccelator from "../assets/images/NAccelator.png";
import TUser from "../assets/images/TUser.png";

function Dashboard() {
  return (
    <div className="inner-layout">
    <p className="path px-3 py-3 mb-0 text-start">COE | Dashboard</p>
      <div className="container-fluid">
        <div className="row p-0">
          <div className="col-3 p-0 pe-1 pb-3">
            <div className="row p-0">
              <div className="col-12">
                <div className="card p-0 m-0">
                  <div
                    style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                  >
                    <div className="p-2" style={{ width: "40%" }}>
                      <img src={TUser} width="50"></img>
                    </div>
                    <div className="dis-start" style={{ width: "60%" }}>
                      <p className="text-start fs-5 fw-normal pe-3 mb-0">230</p>
                      <p
                        className="text-start mb-0"
                        style={{ fontSize: "13px" }}
                      >
                        Total No. of Users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-3">
                <div className="card p-0 m-0">
                  <div
                    style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                  >
                    <div className="p-2" style={{ width: "40%" }}>
                      <img src={AUser} width="50"></img>
                    </div>
                    <div className="dis-start" style={{ width: "60%" }}>
                      <p className="text-start fs-5 fw-normal pe-5 mb-0">10</p>
                      <p
                        className="text-start mb-0 pe-3"
                        style={{ fontSize: "13px" }}
                      >
                        Active Users
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-3">
                <div className="card p-0 m-0">
                  <div
                    style={{ width: "100%", display: "flex", flexWrap: "wrap" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <div className="p-2" style={{ width: "40%" }}>
                        <img src={NAccelator} width="50"></img>
                      </div>
                      <div className="dis-start" style={{ width: "60%" }}>
                        <p className="text-start fs-5 fw-normal pe-3 mb-0">
                          10
                        </p>
                        <p
                          className="text-start mb-0"
                          style={{ fontSize: "13px" }}
                        >
                          No of Accelerators
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 p-0 ps-2 pb-3">
            <div className="card p-0 m-0" style={{ height: "100%" }}>
              <p className="text-start p-3">Users Report</p>
            </div>
          </div>
        </div>
        <div className="row p-0">
          <div className="col-12 p-0">
          <div className="card p-0 m-0" style={{ height: "100%" }}>
              <p className="text-start p-3">Trending Accelerators</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Dashboard;
