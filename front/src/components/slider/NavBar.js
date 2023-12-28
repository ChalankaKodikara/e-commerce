import React, { useEffect } from "react";
import './NavBar.css';

function NavBar() {
  useEffect(() => {
    const resizeNav = () => {
      // Set the nav height to fill the window
      document.getElementById("nav-fullscreen").style.height = window.innerHeight + "px";

      // Set the circle radius to the length of the window diagonal,
      // this way we're only making the circle as big as it needs to be.
      const radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
      const diameter = radius * 2;
      const navOverlay = document.getElementById("nav-overlay");
      navOverlay.style.width = diameter + "px";
      navOverlay.style.height = diameter + "px";
      navOverlay.style.marginTop = -radius + "px";
      navOverlay.style.marginLeft = -radius + "px";
    };

    // Set up click and window resize callbacks, then init the nav.
    const handleToggleClick = () => {
      document.getElementById("nav-toggle").classList.toggle("open");
      document.getElementById("nav-overlay").classList.toggle("open");
      document.getElementById("nav-fullscreen").classList.toggle("open");
    };

    document.getElementById("nav-toggle").addEventListener("click", handleToggleClick);
    window.addEventListener("resize", resizeNav);

    resizeNav();

    return () => {
      // Cleanup event listeners when the component is unmounted
      document.getElementById("nav-toggle").removeEventListener("click", handleToggleClick);
      window.removeEventListener("resize", resizeNav);
    };
  }, []);

  return (
    <div id="nav-container">
      <div id="nav-overlay"></div>
      <nav id="nav-fullscreen">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <a id="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
}

export default NavBar;
