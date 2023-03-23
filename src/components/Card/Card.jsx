import React, { Fragment, useState,useContext } from "react";
import classes from "./Card.module.css";
import bookmark from "../../assets/bi_bookmark-plus-fill.png";
import { useFetch } from "../../Hooks/useFetch";
import axios from "axios";
import { DataContext } from "../Context/DataContext";

const url = "https://api.quotable.io/random";

const Card = () => {
  const { data, loading } = useFetch(url);
  const [value, setValue] = useState([]);
  
  const {buttonData,setBookMarkData} = useContext(DataContext)

  
  const handleClick = async () => {

    setValue(prev =>(
      [...prev,buttonData ? buttonData : data]
    ));

    console.log("value",buttonData ? buttonData: data);
    console.log(value)
  };

  return (
    <Fragment>
      {loading ? (
        <p className={classes.loading}>loading...</p>
      ) : (
        <div className={classes.card}>
          <p className={classes.quote}>{buttonData ? buttonData.content : data.content}</p>
          <span className={classes.author}> -{buttonData? buttonData.authorSlug : data.authorSlug}</span>
          <img
            className={classes.bookmark}
            src={bookmark}
            alt="image"
            onClick={handleClick}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Card;
