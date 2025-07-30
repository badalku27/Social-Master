import React from "react";
import { BsThreeDots } from "react-icons/all";
function TrendsCard() {
  const trends = [
    { tag: "#BadalSinghTech", description: "Trending Developer" },
    { tag: "#AI Revolution", description: "Trending in Technology" },
    { tag: "#ClimateChange2025", description: "Trending in Environment" },
    { tag: "#ElectricVehicles", description: "Trending in Automotive" },
    { tag: "#QuantumComputing", description: "Trending in Innovation" },
  ];
  return trends.map((trend, idx) => (
    <div key={idx} className="trend display-flex justify-content-sb">
      <div>
        <small>{trend.description}</small>
        <h4>{trend.tag}</h4>
      </div>
      <BsThreeDots />
    </div>
  ));
}

export default TrendsCard;
