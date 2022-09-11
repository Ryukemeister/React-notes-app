// import logo from "./logo.svg";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-black flex text-white pl-2 lg:pl-6 drop-shadow-md">
      <div className="nav-logo"></div>
      <div className="nav-links">
        <ul className="flex gap-7 py-4 lg:py-3 px-5 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Rate us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
