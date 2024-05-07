// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const Navbar = () => {
  const snap = useSnapshot(state);

  const generateNavbarStyle = () => {
    return {
      backgroundColor: snap.color,
      color: getContrastingColor(snap.color),
    };
  };

  return (
    <nav style={generateNavbarStyle()} className="p-4">
      <ul className="flex justify-start items-center space-x-4">
        <li>
          <Link
            to="/"
            className="hover:underline"
            style={{ color: generateNavbarStyle().color }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="hover:underline"
            style={{ color: generateNavbarStyle().color }}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
