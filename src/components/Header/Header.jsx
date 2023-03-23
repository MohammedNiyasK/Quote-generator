import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.link_active : classes.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive ? classes.link_active : classes.link
              }
            >
              Bookmarks
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
