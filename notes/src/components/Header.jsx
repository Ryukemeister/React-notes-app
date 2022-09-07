// import logo from "./logo.svg";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-black flex text-white pl-5">
      <div className="nav-logo"></div>
      <div className="nav-links">
        <ul className="flex">
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Rate us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
