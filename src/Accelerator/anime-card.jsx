import React from 'react';
import './style.css';
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

function AnimeCard() {
    const history = useHistory();

    const CardImg = [{name: 'Loan Accelerator', img: LoanAcc}, 
                     {name: 'ML 360', img: ML360},
                     {name: 'Model Ops', img: ModelOps}, 
                     {name: 'Doc Intelligence', img: DocIntelligence},
                     {name: 'Customer Intelligence', img: CustomerIntelligence}, 
                     {name: 'Recommendation HealthCare', img: HealthCare},
                     {name: 'Common Data Modals', img: Common}, 
                     {name: 'ABC Healthcare', img: ABCHealth},
                     {name: 'RAS', img: RAS}]


    const handleCard = () => { history.push("/Accelerator/LoanAccelerator") };

  return (
    <>
    {/* anime-card-1 */}

{CardImg.map((res) => (
    <div className="col-4 p-2 mb-2" onClick={handleCard}>
            <div className="cardBox p-0 m-0">
              <div className="row p-0 m-0" style={{ width: "100%" }}>
              <div className="card-anime">
                <div className="front">
                <div className="col-4 p-0">
                  <img className="acc-img" src={res.img}></img>
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
                    {/* Dashboard Mela */}
                    {res.name}
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
                  {/* <p
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
                  </p> */}
                </div>
              </div>
              <div className="back">
                <div className="col px-2">
              <p
                    className="mb-1 mt-2 text-start"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(0,163,226)"
                    }}
                  >
                    {/* Dashboard Mela */}
                    {res.name}
                  </p>
                  <p
                    className="mb-2 text-start"
                    style={{ fontSize: "10px", fontWeight: "400", color: "#12355B" }}
                  >
                    Last Updated 03 Mar 2022
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
            </div>
          </div>
)
          )}

    </>
  )
}

export default AnimeCard;