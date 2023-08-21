import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = ({ children }) => {
  const path = useLocation();

  return (
    <>
      <div className='header-container'>
        <NavLink
          to='/'
          className='header-link'
          style={({ isActive }) => ({
            color: isActive ? '#135946' : '#505050',
          })}
          state={{ previousPath: path.pathname }}
        >
          HOME
        </NavLink>
        <NavLink
          to='/experience'
          className='header-link'
          style={({ isActive }) => ({
            color: isActive ? '#722939' : '#505050',
          })}
          state={{ previousPath: path.pathname }}
        >
          EXPERIENCE
        </NavLink>
        <NavLink
          to='/projects'
          className='header-link'
          style={({ isActive }) => ({
            color: isActive ? '#285D71' : '#505050',
          })}
          state={{ previousPath: path.pathname }}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to='/contact'
          className='header-link'
          style={({ isActive }) => ({
            color: isActive ? '#4B2E7E' : '#505050',
          })}
          state={{ previousPath: path.pathname }}
        >
          CONTACT
        </NavLink>
      </div>
      {children}
    </>
  );
};

export default Header;
