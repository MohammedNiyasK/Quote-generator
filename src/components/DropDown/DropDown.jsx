import React, { Fragment } from "react";
import classes from "./DropDown.module.css";

const DropDown = () => {
  return (
    <Fragment>
      <div className={classes.dropDown}>
      <select  name="tags" id="tags">
        <option value="tags">Tags</option>
      </select>
      </div>
     
    </Fragment>
  );
};

export default DropDown;
