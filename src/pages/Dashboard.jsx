import React from "react";
import "../css/dashboard.css";
import StatCard from "../components/StatCard";
import RevenueLocation from "../assets/RevenueLocation.png";
import SellingProducts from "../assets/SellingProducts.png";
import RevenueGraph from "../assets/RevenueGraph.png";
import TotalSales from "../assets/TotalSales.png";
import ProjectsvsActuals from "../assets/ProjectvsActuals.png";

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <section className="top-area">
        <div className="left-2x2">
          <StatCard title="Customers" value="3,781" meta="+11.01%" highlight />
          <StatCard title="Orders" value="1,219" meta="-0.03%" to="/orders" />
          <StatCard title="Revenue" value="$695" meta="+15.03%" />
          <StatCard title="Growth" value="30.1%" meta="+6.08%" highlight />
        </div>

        <div className="right-tall">
          <div className="card projections-card">
            <img src={ProjectsvsActuals} alt="Logo" style={{ width: "100%", borderRadius: 12 }} />
          </div>
        </div>
      </section>

      <section className="frame-grid">
        <div className="left-col">
          <div className="big-card card">
            <h3 className="card-title">Revenue</h3>
             <img src={RevenueGraph} alt="Logo" />
          </div>

          <div className="products-card card">
            <h3 className="card-title">Top Selling Products</h3>
            <img src={SellingProducts} alt="Logo" />
          </div>
        </div>

        <aside className="right-col">
          <div className="small-card card">
            <h3 className="card-title">Revenue by Location</h3>
            <img src={RevenueLocation} alt="Logo" />
          </div>
          <div className="small-card card">
            <h3 className="card-title">Total Sales</h3>
             <img src={TotalSales} alt="Logo" />
          </div>
        </aside>
      </section>
    </div>
  );
}
