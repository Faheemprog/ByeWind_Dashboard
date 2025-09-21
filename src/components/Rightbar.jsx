import React from "react";
import "../css/Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="card">
  <div className="card-title">Notifications</div>
  <ul className="rightbar-list">
    <li>
      <span className="notif-text">You have a bug that needs fixing</span>
      <span className="notif-time">Just now</span>
    </li>
    <li>
      <span className="notif-text">New user registered</span>
      <span className="notif-time">Just now</span>
    </li>
    <li>
      <span className="notif-text">Server overloaded</span>
      <span className="notif-time">Just now</span>
    </li>
    <li>
      <span className="notif-text">Andi Lane subscribed to you</span>
      <span className="notif-time">Just now</span>
    </li>
     </ul>
  </div>

      <div className="card">
        <div className="card-title">Activities</div>
        <ul className="rightbar-list">
          <li>You have a bug that needs...</li>
          <li>Released a new Edition</li>
          <li>Submitted a bug</li>
          <li>Modified a Data in Project X</li>
          <li>Deleted a page in Project X</li>
        </ul>
      </div>

      <div className="card">
        <div className="card-title">Contacts</div>
        <ul className="rightbar-list">
          <li>Natali Craig</li>
          <li>Drew Cano</li>
          <li>Orlando Diggs</li>
          <li>Katie Morrison</li>
          <li>Karay Okumus</li>
        </ul>
      </div>
    </div>
  );
}
