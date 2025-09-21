import React from "react";
import { Link } from "react-router-dom";
import "../css/Statcard.css";

export default function StatCard({ title, value, meta, to, highlight }) {
  const inner = (
    <div className={`stat-card ${highlight ? `highlight-${title.toLowerCase()}` : ""}`}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-meta">{meta}</div>
    </div>
  );
  
  return to ? <Link to={to} className="stat-link">{inner}</Link> : inner;
}

