import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink className="header-link highlighted underline" to="/">
        HOME
      </NavLink>
      <NavLink className="header-link" to="/experience">
        EXPERIENCE
      </NavLink>
      <NavLink className="header-link" to="/projects">
        PROJECTS
      </NavLink>
      <NavLink className="header-link" to="/contact">
        CONTACT
      </NavLink>
    </div>
  );
};

export default Header;
