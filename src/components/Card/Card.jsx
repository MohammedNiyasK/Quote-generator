import React, { Fragment } from "react";
import classes from "./Card.module.css";
import bookmark from '../../assets/bi_bookmark-plus-fill.png'

const Card = () => {
  return (
    <Fragment>
      <div className={classes.card}>
        <p className={classes.quote}>The human spirit must prevail over technology</p>
        <span className={classes.author}> -Albert Einstein</span>
        <img className={classes.bookmark} src={bookmark} alt="image" />
      </div>
    </Fragment>
  );
};

export default Card;
