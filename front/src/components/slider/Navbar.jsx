import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div>
      <div id="header">
        <div className="logo">
          <a href="#">Your Logo</a>
        </div>

        <nav role="navigation" class="primary-navigation">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work </a>
              <ul class="dropdown">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Illustration</a>
                </li>
                <li>
                  <a href="#">Iconography</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
