import React, { Fragment, useContext } from "react";
import classes from './BookMarkedCard.module.css'
import { DataContext } from "../Context/DataContext";

const BookMarkedCard = () => {
  const {bookMarkData} = useContext(DataContext)
  return (
    <Fragment>
      <div className={classes.card}>
        <p className={classes.quote}>{bookMarkData && bookMarkData.content} </p>
        <span className={classes.author}> -{bookMarkData && bookMarkData.authorSlug} </span>
      </div>
    </Fragment>
  );
};

export default BookMarkedCard;
