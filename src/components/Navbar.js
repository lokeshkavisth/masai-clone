import React from "react";
import logo from "./images/logo.svg";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          {" "}
          <img src={logo} alt="masai" />
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">courses</a>
          </li>
          <li>
            <a href="/">hire from us</a>
          </li>
          <li>
            <a href="/">refer & earn</a>
          </li>
          <li>
            <a href="/">fees & pap</a>
          </li>
          <li>
            <a href="/">events & contests</a>
          </li>
        </ul>
      </div>
      <div className="nav-btns">
        <a href="/">scholar program</a>
        <a href="/">login</a>
      </div>
    </nav>
  );
}
