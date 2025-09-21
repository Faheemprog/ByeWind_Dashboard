import React from "react";
import OrdersFrame from "../assets/OrdersFrame.png";
import "../css/Orders.css";

export default function Orders() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <img src={OrdersFrame} alt="Logo" />
    </div>
  );
}
