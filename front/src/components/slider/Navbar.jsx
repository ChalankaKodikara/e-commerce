import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav id="navigation">
      <a href="#" className="logo">
        Business Name
      </a>
      <ul className="links">
        <li>
          <a href="#">About</a>
        </li>
        <li className="dropdown">
          <a href="#" className="trigger-drop">
            Work
          </a>
          <ul className="drop">
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Photography</a>
            </li>
            <li>
              <a href="#">Audio</a>
            </li>
            <li>
              <a href="#">Films</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="trigger-drop">
            Contact
          </a>
          <ul className="drop">
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Phone</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
