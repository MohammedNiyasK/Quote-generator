import React, { Fragment } from "react";
import classes from './BookMarkedCard.module.css'


const BookMarkedCard = () => {
  return (
    <Fragment>
      <div className={classes.card}>
        <p className={classes.quote}>The human spirit must prevail over technology</p>
        <span className={classes.author}> -Albert Einstein</span>
      </div>
    </Fragment>
  );
};

export default BookMarkedCard;
