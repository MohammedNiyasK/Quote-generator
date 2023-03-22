import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
            <li>Home</li>
          </Link>

          <Link
            to="/bookmarks"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <li>Bookmarks</li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
