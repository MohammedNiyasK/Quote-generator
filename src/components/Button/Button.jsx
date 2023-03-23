import React,{Fragment,useContext} from 'react';
import classes from  './Button.module.css'
import { DataContext } from '../Context/DataContext';
import axios from 'axios'





const Button = () => {
  const {setButtonData} = useContext(DataContext)

  const handleClick = async () => {
    const response = await axios.get("https://api.quotable.io/random")
    setButtonData(response.data)
  }
  return (
    <Fragment>
      <div className={classes.container}>
      <button className={classes.btn} onClick={handleClick}>
        Next Quote
      </button>
      </div>
      
    </Fragment>
  )
}

export default Button