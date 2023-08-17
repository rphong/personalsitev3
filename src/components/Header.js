import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation();

  return (
    <div className="header-container">
      <NavLink to="/" 
        className="header-link" 
        state={{ previousPath: path.pathname }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/experience"
        className="header-link"
        state={{ previousPath: path.pathname }}
      >
        EXPERIENCE
      </NavLink>
      <NavLink
        to="/projects"
        className="header-link"
        state={{ previousPath: path.pathname }}
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/contact"
        className="header-link"
        state={{ previousPath: path.pathname }}
      >
        CONTACT
      </NavLink>
    </div>
  );
};

export default Header;
