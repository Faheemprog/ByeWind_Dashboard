import React, { useEffect, useState } from "react";
import "../css/Header.css";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("site-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try { localStorage.setItem("site-theme", theme); } catch {}
    }
  }, [theme]);


  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="header-container" role="banner">
      <div className="header-left">
        <div className="header-top-row">
          <div className="small-icon-row">
            <button className="icon-btn small" aria-label="grid">▢</button>
            <button className="icon-btn small" aria-label="star">★</button>
          </div>
          <div className="breadcrumbs">
            <span className="muted">Dashboards</span>
            <span className="crumb-sep">/</span>
            <span className="current">Default</span>
          </div>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-center">
        <div className="search-wrap">
          <input className="header-search" placeholder="Search" aria-label="Search" />
        </div>
        </div>
        <button
          className="icon-btn"
          title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button className="icon-btn" title="Notifications">🔔</button>
        <button className="icon-btn" title="Apps">▦</button>
      </div>
    </div>
  );
}

