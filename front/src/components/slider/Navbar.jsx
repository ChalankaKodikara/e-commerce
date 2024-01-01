import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar(props) {
  useEffect(() => {
    const resizeNav = () => {
      // Your existing resizeNav logic...
    };

    const handleToggleClick = () => {
      // Your existing handleToggleClick logic...
    };

    document
      .getElementById("nav-toggle")
      .addEventListener("click", handleToggleClick);
    window.addEventListener("resize", resizeNav);

    resizeNav();

    return () => {
      document
        .getElementById("nav-toggle")
        .removeEventListener("click", handleToggleClick);
      window.removeEventListener("resize", resizeNav);
    };
  }, []);

  return (
    <div>
      <div id="header">
        <div className="logo">
          <a href="/">e Commerce</a>
        </div>
        <ul>
          <li>
            <a
              href="/auctions"
              className={props.clicked === "auctions" ? "selected" : ""}
            >
              Auctions
            </a>
          </li>
          <li>
            <a
              href="/auctions"
              className={props.clicked === "auctions" ? "selected" : ""}
            >
              Auctions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
