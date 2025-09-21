import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";       
import Rightbar from "./components/Rightbar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <div className="app-grid">
          <aside className="sidebar">
            <Sidebar />
          </aside>

          <div className="middle-column">
            <div className="middle-header">
              <Header />
            </div>

            <main className="middle-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>
          </div>

          {/* RIGHT column - Rightbar */}
          <aside className="rightbar">
            <Rightbar />
          </aside>
        </div>
      </div>
    </Router>
  );
}
