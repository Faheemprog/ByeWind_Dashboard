import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Rightbar from "./Rightbar";
import { Outlet } from "react-router-dom"; 

export default function Frame() {
  return (
    <div className="app-grid">
      {/* LEFT: Sidebar */}
      <aside className="sidebar">
        <Sidebar />
      </aside>


      <div className="middle-column">
        <div className="middle-header">
          <Header />
        </div>
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      <aside className="rightbar">
        <Rightbar />
      </aside>
    </div>
  );
}
