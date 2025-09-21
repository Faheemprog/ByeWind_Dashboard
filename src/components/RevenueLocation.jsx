import React from "react";
import mapImg from "../assets/RevenueLocation.png"; 

export default function RevenueLocation() {
  return (
    <div className="card">
      <div className="card-title">Revenue by Location</div>
      <img 
        src={mapImg} 
        alt="Revenue by Location" 
        style={{ width: "100%", borderRadius: 8 }} 
      />
    </div>
  );
}
