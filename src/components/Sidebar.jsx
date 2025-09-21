import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Sidebar.css";
import logo from "../assets/logo.png";

const SECTIONS = [
  {
    title: "Favorites",
    items: [{ id: "fav_overview", label: "Overview"}],
  },
  {
    title: "Dashboards",
    items: [
      { id: "dash_default", label: "Default"},
      { id: "dash_ecommerce", label: "eCommerce"},
      { id: "dash_projects", label: "Projects"},
      { id: "dash_crypto", label: "Crypto"},
    ],
  },
  {
    title: "Pages",
    items: [
      {
        id: "page_userprofile",
        label: "User Profile",
        icon: "user",
        children: [
          { id: "profile_overview", label: "Overview" },
          { id: "profile_projects", label: "Projects" },
          { id: "profile_campaigns", label: "Campaigns" },
          { id: "profile_documents", label: "Documents" },
          { id: "profile_followers", label: "Followers" },
        ],
      },
      { id: "page_account", label: "Account"},
      { id: "page_corporate", label: "Corporate"},
      { id: "page_blog", label: "Blog"},
      { id: "page_social", label: "Social"},
    ],
  },
];


export default function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(() => {
    try { return localStorage.getItem("sidebar-selected") || "dash_default"; } catch { return "dash_default"; }
  });

  useEffect(() => {
    try { localStorage.setItem("sidebar-selected", selected); } catch {}
  }, [selected]);

  function handleClick(id) {
    setSelected(id);
    navigate("/");
  }

  function handleKey(e, id) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(id);
    }
  }

  return (
    <aside className="sidebar-frame" role="navigation" aria-label="Main sidebar">
      <div className="sidebar-inner">
      <div className="brand">
       <img src={logo} />
      </div>
      </div>

      <div className="sidebar-sections">
        {SECTIONS.map((sec) => (
          <div key={sec.title} className="sidebar-section">
            <div className="sidebar-section-title">{sec.title}</div>

            <div className="sidebar-items">
              {sec.items.map((it) => {
                const isSelected = selected === it.id;
                return (
                  <div
                    key={it.id}
                    role="button"
                    tabIndex={0}
                    className={`sidebar-item ${isSelected ? "selected" : ""}`}
                    onClick={() => handleClick(it.id)}
                    onKeyDown={(e) => handleKey(e, it.id)}
                    aria-pressed={isSelected}
                    aria-label={it.label}
                  >
                    <span className="sidebar-item-left">
                      <span className="sidebar-item-label">{it.label}</span>
                    </span>

                    {isSelected && <span className="sidebar-item-active-dot" aria-hidden="true" />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
